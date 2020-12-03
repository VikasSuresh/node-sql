const routes = require('express').Router();

const {Currency,CurrencySeq} = require('./schemas')

routes.get('/',require('./index'));
routes.use('/currency',Currency)
routes.use('/seq',CurrencySeq)

module.exports = routes;