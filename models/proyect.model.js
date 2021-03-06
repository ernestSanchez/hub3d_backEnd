const mongoose = require('mongoose');

const types = mongoose.Schema.Types

const proyectSchema = new mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true,
    },
    "user_id": {
        type:types.String,
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
        enum: ["rig", "model", "animacion", "concept",""]
    }],
    "requierimiento": [{
        require: true,
        type: types.String,
        enum: ["rigger", "modeller", "animador",""]
    }],
    "tipo": [{
        require: true,
        type: types.String,
        enum: ["character", "prop","bg-set","concept-personaje",""]
    }],
    "descripcion": {
        type: types.String,
        require: true,
        min: 3,
        max: 250
    },
    "tipoArchivo": [{
        require: true,
        type: types.String,
        enum: ["obj", "maya","3dmax","blender",""]
    }],
    "colaboration": [{
        type: types.ObjectId,
        ref: 'user',
    }],
    "visitas": {
        require: true,
        type: types.String,
        min: 0
    },
    "lols": {
        require: true,
        type: types.String,
        min: 0
    },
});

module.exports = mongoose.model("proyect", proyectSchema);