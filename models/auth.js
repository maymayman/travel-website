'use strict';

let passport = require('passport');
let ParseStrategy = require('passport-parse');

let parseClient = require('./parseClient.js').init();

let parseStrategy = new ParseStrategy({ parseClient: parseClient });

// Setting passport with the strategies
passport.use(parseStrategy);

passport.serializeUser(function(user, done) {
  if (user.has('avatar')) {
    user.get('avatar').fetch().then((imgObj) => {
      let obj = user.toJSON();
      obj.avatar = imgObj;

      done(null, obj);
    }).catch(() => {
      done(null, user);
    });
  } else {
    done(null, user);
  }
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;
