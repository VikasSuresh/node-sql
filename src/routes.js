const routes = require('express').Router();

const {Currency} = require('./schemas')

routes.get('/',require('./index'));
routes.use('/currency',Currency)

module.exports = routes;