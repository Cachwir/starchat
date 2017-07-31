var indexController = function()
{
    var module = {};

    module.homeAction = function homeAction(req, res, next) {
        res.render('index', { title: 'Express' });
    };

    return module;
};

module.exports = new indexController();
