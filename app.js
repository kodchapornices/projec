var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var session = require('express-session');
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!",resave: true,saveUninitialized: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next) {
  res.locals.sessions = req.session
  res.locals.cookies = req.cookies
  next();
});
app.use("/", indexRouter);
app.use("/users", usersRouter);
const uri = "mongodb+srv://admin:nattagit0648629640@cluster0.9ny28.mongodb.net"; //database's link
//connect to database
mongoose
  .connect(uri)
  .then((result) =>
    app.listen(3000, () => {
      console.log("App is running on port 3000 http://localhost:3000/");
    })
  )
  .catch((err) => console.log(err));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;