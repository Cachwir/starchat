var config = require('./../config/config');
var Sequelize = require("sequelize");

var connection = new Sequelize(config.database.database, config.database.user, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = connection;