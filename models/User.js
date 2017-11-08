'use strict';

const moment = require('moment');
const dateFormatWithOffsetToken = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

let ParseClient = require('./parseClient.js');
var Parse;

let USER = {};

USER.getUserQuery = function() {
  let query = new Parse.Query(Parse.User);

  return query;
};

module.exports = {
  /**
   * Initialize.
   */
  connectAPI: function() {
    Parse = ParseClient.init();

    return this;
  },

  getParse: function() {
    return Parse;
  },

  getAllUsers: function() {
    const userQuery = USER.getUserQuery();

    return userQuery.first().then((users) => {
      console.log(users);
      return Parse.Promise.resolve(users.toJSON());
    }).catch((err) => {
      return Parse.Promise.reject(err);
    });
  }
};



