const { celebrate, Joi, Segments } = require('celebrate');

module.exports = celebrate({
    [ Segments.QUERY ]: Joi.object({
        page: Joi.number().default(0),
        size: Joi.number().default(20),
    }),
});
