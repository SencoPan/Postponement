const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
//const csrf = require("csurf");

const app = express();

//csrf setup
//const csrfProtection = csrf({ cookie: true });


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}));
//app.use(csrfProtection);

require("./routes/")(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    status: "error",
    message: err.message
  });
});

module.exports = app;
