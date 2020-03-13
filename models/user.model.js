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
        min:5,
        max:50
    },
    "habilidad": [{
        require: true,
        type: types.String,
        enum: ["rigger","modeller","animador","concept-Artist"]
    }],
});


module.exports = mongoose.model("user",userSchema);