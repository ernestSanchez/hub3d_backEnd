const users = require('../models/user.model');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const authController = require('./auth.controller')

const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);


mongoose.connect(secrets.mongo_login, { useNewUrlParser: true, useUnifiedTopology: true });


exports.createUser = (req, res) => {

    bcrypt.hash(req.body.password, 14,
        (error, hash) => {
            if (error) throw error;
            const data = {
                "username": req.body.username,
                "name": req.body.name,
                "secondname": req.body.secondname,
                "email": req.body.email,
                "password": hash,
                "habilidad": req.body.habilidad,
                "_id": mongoose.Types.ObjectId()
            }
            const newUser = new users(data);
            newUser.save((error, result) => {
                if (error) throw error;
                res.send({ "succes": "added new user", "_id": result._id })
            })
        }
    )
}

exports.allUsers = (req, res) => {
    users.find((error, users) => {
        if (error) throw error;
        res.send(users)
    })
}

exports.getUser = (req, res) => {
    const id = req.params.id;
    users.findById(id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
};

exports.updateUser = (req, res) => {

    authController.checkToken(req, res,
        (req, res) => {
            const data = {
                "_id": req.body._id,
                "username": req.body.username,
                "name": req.body.name,
                "secondname": req.body.secondname,
                "email": req.body.email,
                "habilidad": req.body.habilidad
            }
            users.findByIdAndUpdate(
                req.body._id,
                {
                    $set: data
                },
                (error, result) => {
                    if (error) throw error;
                    res.send({ "succes": "user modified" })
                }

            )
        }
    )

}

exports.removeUser = (req, res) => {
    const id = req.params.id;
    console.log(id)
    authController.checkToken(
        req, res, 
        (req, res) => {
        users.findByIdAndDelete(id, (error, result) => {
            if (error) throw error;
            res.send({ "succes": "user removed" })
        })
    })
}