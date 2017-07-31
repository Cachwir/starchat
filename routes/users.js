var express = require('express');
var router = express.Router();
var userController = require('./../controllers/userController');

router.use("/", function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    userController.listAction(req, res, next);
});

/* GET target user. */
router.get('/:userId(\\d+)', function(req, res, next) {
    userController.showAction(req, res, next);
});

/* GET creates a user. */
router.get('/add', function(req, res, next) {
    userController.manageAction(req, res, next);
});

module.exports = router;
