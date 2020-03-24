const experiences = require('../models/experience.model');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect(secrets.mongo_login, { useNewUrlParser: true, useUnifiedTopology: true });


exports.createExperience = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "empresa": req.body.empresa,
        "especialidad": req.body.especialidad,
        "cargo": req.body.cargo,
        "fechaIni":req.body.fechaIni,
        "fechaFin":req.body.fechaIni,
        "EmpresaUrl":req.body.EmpresaUrl
    }
    console.log(data)
    const newEperience = new experiences(data);
    newEperience.save((error) => {
        if (error) throw error;
        res.send({ "succes": "added new experience", "id": data._id })
    })
}

exports.allExperiences = (req, res) => {
    experiences.find((error, experiences) => {
        if (error) throw error;
        res.send(experiences)
    })
}

exports.getExperience = (req, res) => {
    const id = req.params.id;
    experiences.findById(id, (error, result) => {
        if (error) throw error;
        res.send(result)
    });
}

exports.modifyExperience = (req, res) => {
    const data = {
        "_id": req.body._id,
        "empresa": req.body.empresa,
        "especialidad": req.body.especialidad,
        "cargo": req.body.cargo,
        "fechaIni":req.body.fechaIni,
        "fechaFin":req.body.fechaIni,
        "EmpresaUrl":req.body.EmpresaUrl
    }
    experiences.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({ "succes": "modified experience" })
        }
    )
}

exports.removeExperience = (req, res) => {
    const id = req.params.id;
    experiences.findByIdAndRemove(id, (error, result) => {
        if (error) throw error;
        res.send({ "succes": "experience removed" })
    })
}