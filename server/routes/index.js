const personController = require("../controller/index").person;

module.exports = app => {
    app.get('/api', (req, res) => {
        res.status(200).json({
            "message": "Main path for api was reached."
        })
    });
    app.post('/api/createPerson', personController.create);
    app.get('/api/createPerson', personController.list);
};