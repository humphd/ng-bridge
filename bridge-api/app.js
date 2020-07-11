const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// We need the cors middleware to allow cross-origin resource sharing
const cors = require('cors');

const bridgesRouter = require('./routes/bridges');

const app = express();

// Add CORS `Access-Control-Allow-Origin: *` header to responses
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// All routes will get mounted to http://localhost:3000/api/*
app.use('/api', bridgesRouter);

module.exports = app;
