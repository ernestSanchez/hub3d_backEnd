const express = require('express');
const bodyParser = require('body-parser');
const controllerUser = require('./controllers/user.controller');
const cookieparser = require('cookie-parser');
const authController = require('./controllers/auth.controller')
const controllerProyect = require('./controllers/proyect.controller');
const controllerArchive = require('./controllers/archive.controller');
const controllerColaboration = require('./controllers/colaboration.controller');
const controllerExperience = require('./controllers/experience.controller');
const cors = require('cors');
const server = express();

server.use(express.static('web'));
server.use(bodyParser.json());
server.use(cookieparser());
server.use(cors());

server.post('/register',controllerUser.createUser);
server.get('/users',controllerUser.allUsers);
server.get('/user/:id',controllerUser.getUser);
server.put('/modifyUser',controllerUser.updateUser);
server.post('/login',authController.login);
server.delete('/deleteUser/:id',controllerUser.removeUser);

server.post('/newProyect',controllerProyect.createProyect);
server.post('/proyects',controllerProyect.filterProyects);
server.get('/proyects',controllerProyect.allProyects);
server.get('/proyect/:id',controllerProyect.getProyect);
server.put('/modifyProyect',controllerProyect.modifyProyect);
server.delete('/deleteProyect/:id',controllerProyect.removeProyect);

server.post('/newExperience',controllerExperience.createExperience);
server.get('/Experiences',controllerExperience.allExperiences);
server.get('/Experience/:id',controllerExperience.getExperience);
server.put('/modifyExperience',controllerExperience.modifyExperience);
server.delete('/deleteExperience/:id',controllerExperience.removeExperience);


server.post('/upload',controllerArchive.uploadArchives);

server.get('/newColaboration',controllerColaboration.addColaborationUserProyect);


server.listen(3000,()=>{
    console.log("server activated >3000<")
})