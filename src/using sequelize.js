const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
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

const sequilize = new Sequelize(process.env.DB,process.env.DB_UNAME,process.env.DB_PWD,{
    host: 'pw-import-workflow-dev.cxk3u0qhetwz.ap-south-1.rds.amazonaws.com',
    port: 1433,
    dialect: 'mssql',
    dialectOptions: {
      ssl: true
    },

    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
})

const Currency = sequilize.define('currency',require('./model/currency'),{
  freezeTableName: true,
});

Currency.sync({force:true}).then(()=>{
  return Currency.create({
    name: "Test"
  });
});

Currency.findOne().then(function (curr) {
  console.log(curr.get('name'));
});


module.exports = app;