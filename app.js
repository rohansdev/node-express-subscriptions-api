// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;

//Custom code begins here
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from API.",
  });
});

const port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
