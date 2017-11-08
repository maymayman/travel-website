'use strict';

const express = require('express');
const router = express.Router();
const passportParse = require('../models/auth.js');
const baseAuth = require('./base/authentication.js');
const CONSTANTS = require('../config/constants.js').AUTH_PAGES;

// route middleware that will happen on every request
router.use(function(req, res, next) {
  // continue doing what we were doing and go to the route
  for (let k in CONSTANTS) {
    res.locals[k] = CONSTANTS[k];
  }

  next();
});

router.post('/login', baseAuth.ensureUnauthenticated,
  passportParse.authenticate('parse', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: '無効のユーザーネーム又は、パスワード'
  })
);

/* GET Logout page. */
router.get('/logout', function(req, res) {
  req.logout();
  req.session.destroy();
  if (req.query.access == 0) {
    res.redirect('/login');
  } else {
    res.redirect('/');
  }
});

module.exports = router;
