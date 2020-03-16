const mongoose = require('mongoose');

const types = mongoose.Schema.Types

const proyectSchema = new mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true,
    },
    "nombre": {
        type: types.String,
        require: true,
        min: 3,
        max: 70
    },
    "categoria": [{
        require: true,
        type: types.String,
        enum: ["rig", "model", "animacion", "concept"]
    }],
    "requierimiento": [{
        require: true,
        type: types.String,
        enum: ["rigger", "modeller", "animador"]
    }],
    "tipo": [{
        require: true,
        type: types.String,
        enum: ["character", "prop"]
    }],
    "colaboration": [{
        type: types.ObjectId,
        ref: 'user',
    }],
});

module.exports = mongoose.model("proyect", proyectSchema);