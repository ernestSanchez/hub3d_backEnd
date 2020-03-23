const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('../models/user.model');
const fs = require('fs');
const path = require('path');


const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

exports.login = (req, res) => {

    users.find(
       {username:req.body.username},
        (error, user) => {
            console.log(user)
            if (error) throw error;

            bcrypt.compare(    
                req.body.password,
                user[0].password,
                (error, coincidence) => {
                    if (error) throw error;
                    if (coincidence === true) {
                        jwt.sign(
                            { "username": user[0].username },
                            secrets.jwt_clave,
                            (error, token) => {
                                if (error) throw error;
                                res.cookie("megazord", token);
                                res.send({ "success": "welcome", "token": token ,_id:user[0]._id })
                            }
                        )
                    } else {

                        res.send({ "error": "password null" })
                    }
                }
            )
        }
    )
}


exports.checkToken = (req, res, callback) => {

    if (req.cookies["megazord"] !== undefined) {

        jwt.verify(
            req.cookies["megazord"],
            secrets.jwt_clave,
            (error, verificado) => {
                if (error) throw error;

                if (!verificado) {
                    res.send({ "error": "token no valid" })
                    return false;
                } else {
                    callback(req, res)
                    return true;
                }
            }
        )
    } else {
        res.send({ "error": "unauthenticated user", "login": "/login" })
        return false;
    }
}  
