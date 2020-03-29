const mongoose = require('mongoose');
const colaborations = require('../models/colaboration.model');
const path = require('path');
const fs = require('fs');

const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect(secrets.mongo_login, { useNewUrlParser: true, useUnifiedTopology: true });


exports.addColaboration = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "user_id": req.body.user_id,
        "proyect_id": req.body.proyect_id,
        "categoria": req.body.categoria,
        "descripcion": req.body.descripcion,
        "tipoArchivo": req.body.tipoArchivo
    }
    console.log(data)
    const newColaboration = new colaborations(data);
    newColaboration.save((error) => {
        if (error) throw error;
        res.send({ "succes": "added new colaboration", "id": data._id })
    })
}

exports.allcolaborations = (req, res) => {
    colaborations.find((error, proyects) => {
        if (error) throw error;
        res.send(proyects)
    })
}

exports.removeColaboration = (req, res) => {
    const id = req.params.id;
    colaborations.findByIdAndRemove(id, (error, result) => {
        if (error) throw error;
        res.send({ "succes": "colaboration removed" })
    })
}