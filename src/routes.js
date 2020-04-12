const routes = require('express').Router();
const dockerController = require('./app/docker-controller');
const trelloController = require('./app/trello-controller');

routes.get('/sad/lista-dockers', dockerController.listarDocker);

routes.get('/trello/infocards',trelloController.searchInfoCards);

routes.get('/trello/create-docker', trelloController.createCardDocker);

module.exports = routes;
