var express = require('express');
var router = express.Router();
var indexController = require('./../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
    indexController.homeAction(req, res, next);
});

module.exports = router;
