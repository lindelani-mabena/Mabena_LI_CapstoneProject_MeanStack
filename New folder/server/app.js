var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("Database connnected")}).catch(
  (error)=>{console.log("error with database connection")}
);
module.exports = app;
