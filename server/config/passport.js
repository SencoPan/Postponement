const bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
  const User = user;
  const LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findByPk(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "login",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, login, password, done) {
        let User = user;
        let isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };
        User.findOne({
          where: {
            login: login
          }
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }
            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            let userInfo = user.get();

            return done(null, userInfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "login",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, login, password, done) {
        let generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        let hashedPassword = generateHash(password);

        let data = {
          login,
          password: hashedPassword
        };

        User.create(data).then(function(newUser) {
          if (newUser) {
            return done(null, newUser);
          } else {
            return done(null, false);
          }
        });
      }
    )
  );
};
