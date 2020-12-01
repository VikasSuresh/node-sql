const routes = require('express').Router();

const  {CurrencyId} = require('./schemas')

routes.get('/', require('./get'));
routes.post('/', require('./post'));

routes.use('/:currencyId',CurrencyId);

module.exports = routes;
