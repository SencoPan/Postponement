const person = require("../models/").Postponement;

module.exports = {
  create(req, res) {
    return person
      .create(
        {
          delay: req.body.delay,
          delayTo: req.body.delayTo,
          deposit: req.body.deposit,
          fullname: req.body.fullname,
          number: req.body.number
        },
        {
          order: [["number", "ASC"]]
        }
      )
      .then(person => res.status(201).json(person))
      .catch(error => res.status(400).json(error));
  },
  list(req, res) {
    return person
      .findAll({
        order: [["number", "ASC"]]
      })
      .then(person => res.status(200).json(person))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    const { id } = req.query;
    return person
      .findByPk(+id)
      .then(person => {
        if (!person) {
          return res.status(400).send({
            message: "Person Not Found"
          });
        }
        return person
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
