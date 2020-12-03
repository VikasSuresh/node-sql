require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const morgan = require('morgan');
const Sequelize = require('sequelize');


const app = express();
const basePath = process.env.BASE_PATH || '/';

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errors());

if (process.env.URI !== '' || process.env.PG_HOST !== '') {
  const sequelize = new Sequelize(process.env.PG_DB,process.env.PG_USER,process.env.PG_PWD,{
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    logging: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
})
  sequelize.authenticate()
      .then(async () =>{
          global.sequelize = sequelize;
          const db = require('./model/seq/');
          Object.keys(db).forEach(function(modelName) {
              if ("associate" in db[modelName]) {
                  db[modelName].associate(db);
              }
          });
          await sequelize.sync({ alter: true });
          app.use('/', require('./routes'));
          console.log('Connected')
      })
      .catch((err)=>{
          console.log('Unable to Establish Database Connection.',err);
          process.exit(-1);
      });
  
}
/* Server Implementation for sequelize */

app.listen(process.env.PORT, () => {
    console.log('Express server listening on port - seq '); // eslint-disable-line
});

module.exports = app;