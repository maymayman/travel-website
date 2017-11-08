'use strict';

let parse = require('parse/node');
let configPath = '../config/' + ((process.env.NODE_ENV === 'production') ? 'production' : 'development') + '.js';
let config = require(configPath);

module.exports = {
  init: function() {
    console.log(config);
    parse.initialize(config.parse.appId, config.parse.javascriptKey);
    parse.serverURL = config.parse.serverURL;

    return parse;
  }
};
