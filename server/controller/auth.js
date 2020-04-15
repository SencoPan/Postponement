const admin = require("../models").admin;

module.exports = {
  list(req, res) {
    return admin
      .findAll()
      .then(person => res.status(200).json(person))
      .catch(error => res.status(400).send(error));
  }
};
