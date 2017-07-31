var User = require('./../src/entities/User');

const userController = function()
{
    var module = {};

    module.listAction = function listAction(req, res, next) {
        res.send('respond with a resource');
    };

    module.showAction = function showAction(req, res, next) {
        var userId = req.param("userId");
        res.send('This is the user you requested.');
    };

    module.manageAction = function listAction(req, res, next) {
        // force: true will drop the table if it already exists
        User.sync({force: true}).then(function() {
            // Table created
            return User.create({
                username: 'username',
                password: 'password',
                firstName: 'John',
                lastName: 'Hancock'
            });
        });

        res.send('A user was created !');
    };

    return module;
};

module.exports = new userController();
