const personController = require("../controller/index").person;
const adminController = require("../controller/index").auth;
const { route, middleware } = require("./auth");

module.exports = (app, passport, sessionValidation) => {
  app.get("/api", (req, res) => {
    res.status(200).json({
      message: "Main path for api was reached."
    });
  });
  app.get(route, middleware);
  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/",
      failureRedirect: "/login"
    })
  );
  app.use(sessionValidation);
  app.post("/api/person", personController.create);
  app.get("/api/person", personController.list);
  app.delete("/api/person", personController.destroy);
  app.patch("/api/person", personController.update);
  app.get("/test", adminController.list);
};
