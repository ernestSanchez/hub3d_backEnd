const mongoose = require('mongoose');

const types = mongoose.Schema.Types

const experienceSchema = new mongoose.Schema({
    
    "_id": {
        type: types.ObjectId,
        require: true,
    },
    "empresa": [{
        require: true,
        type: types.String,
        min: 2
    }],
    "especialidad": [{
        require: true,
        type: types.String,
        min: 3
    }],
    "cargo": [{
        require: true,
        type: types.String,
        enum: ["lead","mid","junior","senior"]
    }],
    "fechaIni": [{
        require: true,
        type: types.String,
    }],
    "fechaFin": [{
        require: true,
        type: types.String,
    }],
    "EmpresaUrl": [{
        require: true,
        type: types.String,
    }],

})

module.exports = mongoose.model("experience", experienceSchema);