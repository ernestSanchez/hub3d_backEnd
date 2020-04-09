const mongoose = require('mongoose');

const types = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true,
    },
    "username": {
        type: types.String,
        require: true,
        min: 3,
        max: 70
    },
    "email": {
        type: types.String,
        require: true,
        unique: true,
        min: 5,
        max: 250
    },
    "password": {
        type: types.String,
        require: true,
    },
    "name": {
        type: types.String,
        require: true,
        min: 5,
        max: 50
    },
    "secondname": {
        type: types.String,
        min: 5,
        max: 50
    },
    "habilidad": [{
        require: true,
        type: types.String,
        enum: ["rigger", "modeller", "animador", "concept-Artist"]
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
    "status": [{
        require: true,
        type: types.String,
        enum: ["student", "professional"]
    }],
    "workStatus": [{
        require: true,
        type: types.String,
        enum: ["working", "looking for a job"]
    }],
    "location": [{
        require: true,
        type: types.Array
    }],
    "urlReel": {
        require: true,
        type: types.String,
        min: 5,
        max: 250
    },
    "urlImageUser": {
        require: true,
        type: types.String,
        min: 0,
        max: 250
    },
});


module.exports = mongoose.model("user", userSchema);