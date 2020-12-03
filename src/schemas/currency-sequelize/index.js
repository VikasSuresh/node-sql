const router = require('express').Router();

router.get('/',require('./validators/get'), require('./get'));

module.exports = router;
