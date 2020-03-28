const mongoose = require('mongoose');

const types = mongoose.Schema.Types

const colaborationtSchema = new mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true,
    },
    "user_id": {
        type:types.String,
        require: true,
    },
    "proyect_id": {
        type:types.String,
        require: true,
    },
    "categoria": [{
        require: true,
        type: types.String,
        enum: ["rig", "model", "animacion", "concept",""]
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
});

module.exports = mongoose.model("colaboration", colaborationtSchema);