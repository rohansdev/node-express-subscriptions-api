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
import { PORT, API_VERSION } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouterRouter from "./routes/subscription.routes.js";
import connectToDb from "./database/mongodb.js";

const app = express();

//Use routes
app.use(`/api/${API_VERSION}/auth`, authRouter);
app.use(`/api/${API_VERSION}/users`, userRouter);
app.use(`/api/${API_VERSION}/subscriptions`, subscriptionRouterRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from API.",
  });
});

app.listen(PORT, async () => {
  console.log(`API running on http://localhost:${PORT}/api/${API_VERSION}`);

  await connectToDb();
});
