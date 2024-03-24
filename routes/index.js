const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.tosinRoute);
routes.get('/timmy', lesson1Controller.timmyRoute);
routes.get('/adam', lesson1Controller.adamRoute);

module.exports = routes;