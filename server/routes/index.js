const personController = require("../controller/index").person;

module.exports = app => {
  app.get("/api", (req, res) => {
    res.status(200).json({
      message: "Main path for api was reached."
    });
  });
  app.post("/api/person", personController.create);
  app.get("/api/person", personController.list);
  app.delete("/api/person", personController.destroy);
};
