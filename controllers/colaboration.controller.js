const mongoose = require('mongoose');
const proyects = require('../models/proyect.model');
const path = require('path');
const fs = require('fs');

const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect(secrets.mongo_login, { useNewUrlParser: true, useUnifiedTopology: true });


exports.addColaborationUserProyect = (req, res) => {
    const data = {
        "_id": req.body._id,
        "nombre": req.body.nombre,
        "categoria": req.body.categoria,
        "requierimiento": req.body.requierimiento,
        "tipo": req.body.tipo,
        "colaboration": mongoose.Types.ObjectId(),
    }
    proyects.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({ "succes": "add new userColaboration" })
        }
    )
}