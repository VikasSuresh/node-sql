const routes = require('express').Router({mergeParams:true})

routes.get('/',require('./get'))
routes.put('/',require('./put'))
routes.delete('/',require('./delete'))

module.exports = routes;