const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const morgan = require('morgan');
const { Pool } = require('pg');

const model = require('./model')

const app = express();
const basePath = process.env.BASE_PATH || '/';

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(basePath, require('./routes'));

app.use(errors());

let Client = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PWD,
  port: process.env.PG_PORT
});

Client
  .connect()
  .then((client)=>{
    model(client)
    global.pgClient = client
    console.log('Connected')
  })
  .catch((err)=>console.log(err))

module.exports = app;