const person = require("../models/").Postponement;

module.exports = {
    create(req, res) {
    return person.create({
        delay : req.body.delay,
        delayTo: req.body.delayTo,
        deposit: req.body.deposit,
        fullname: req.body.fullname,
        number: req.body.number
    })
        .then( person => res.status(201).json(person) )
        .catch( error => res.status(400).json(error) )
    },
    list(req, res) {
        return person
            .findAll()
            .then(person => res.status(200).json(person))
            .catch(error => res.status(400).send(error));
    },
};