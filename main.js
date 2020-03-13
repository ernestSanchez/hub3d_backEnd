const express = require('express');
const bodyParser = require('body-parser');
const controllerUser = require('./controllers/user.controller');
const cookieparser = require('cookie-parser');
const authController = require('./controllers/auth.controller')

const server = express();

server.use(bodyParser.json());
server.use(cookieparser());

server.post('/register',controllerUser.createUser);

server.get('/users',controllerUser.allUsers);

server.get('/user/:id',controllerUser.getUser);

server.put('/modifyUser',controllerUser.updateUser);

server.post('/login',authController.login);

server.delete('/deleteUser/:id',controllerUser.removedUser);

server.listen(3000,()=>{
    console.log("server activated >3000<")
})