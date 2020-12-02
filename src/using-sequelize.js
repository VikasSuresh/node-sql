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
app.use(basePath, require('./routes'));

app.use(errors());

const sequilize = new Sequelize(process.env.PG_DB,process.env.PG_USER,process.env.PG_PWD,{
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
})

const Currency = sequilize.define('currency',require('./model/currency-sequelize'),{
  freezeTableName: true,
});

Currency.sync({force:true}).then(()=>{
  return Currency.create({
    name: "Test"
  });
});

Currency.findOne().then((currency) => {
  console.log(currency.get('name'));
});


module.exports = app;