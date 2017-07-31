var YAML = require('yamljs');
var fs = require('fs');
var pathToConfig = __dirname + "/../../src/config/config.yml";

if (!fs.existsSync(pathToConfig)) {
    throw "Please add a src/config/config.yml by using src/config/config.yml.dist as a template";
}

var config = YAML.load(pathToConfig);

module.exports = config;