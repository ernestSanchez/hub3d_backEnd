const proyects = require('../models/proyect.model');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect(secrets.mongo_login, { useNewUrlParser: true, useUnifiedTopology: true });

exports.createProyect = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "user_id":req.body.user_id,
        "nombre": req.body.nombre,
        "categoria": req.body.categoria,
        "requierimiento": req.body.requierimiento,
        "tipo":req.body.tipo,
        "descripcion":req.body.descripcion
    }
    console.log(data)
    const newProyect = new proyects(data);
    newProyect.save((error) => {
        if (error) throw error;
        res.send({ "succes": "added new proyect", "id": data._id })
    })
}

exports.allProyects = (req, res) => {
    proyects.find((error, proyects) => {
        if (error) throw error;
        res.send(proyects)
    })
}

exports.getProyect = (req, res) => {
    const id = req.params.id;
    proyects.findById(id, (error, result) => {
        if (error) throw error;
        res.send(result)
    });
}

exports.modifyProyect = (req, res) => {
    const data = {
        "_id": req.body._id,
        "user_id":req.body.user_id,
        "nombre": req.body.nombre,
        "categoria": req.body.categoria,
        "requierimiento": req.body.requierimiento,
        "tipo":req.body.tipo,
        "descripcion":req.body.descripcion
    }
    proyects.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({ "succes": "modified project" })
        }
    )
}

exports.removeProyect = (req, res) => {
    const id = req.params.id;
    proyects.findByIdAndRemove(id, (error, result) => {
        if (error) throw error;
        res.send({ "succes": "proyect removed" })
    })
}