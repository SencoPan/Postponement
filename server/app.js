const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const serveStatic = require("serve-static");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helmet = require("helmet");

const database = require("./models");

const app = express();

//Auth session protection

const isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};

app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: database.sequelize
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "https://postponements.herokuapp.com/",
    credentials: true
  })
);

require("./routes/")(app, passport, isLoggedIn);
require("./config/passport")(passport, database.admin);

app.use(serveStatic(__dirname + "/dist"));

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
