'use strict';

const ROLES = require('../../config/constants.js').ROLES;
const USER_STATE = require('../../config/constants.js').USER_STATE;
const _ = require('lodash');
module.exports = {
  // Simple route middleware to ensure user is authenticated.
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('***1***');
      res.locals.user = req.user;
      // req.locals.isAdmin = true;
      next();
      // if (req.user.role == ROLES.OPERATOR || req.user.role == ROLES.ADMIN) {
      //   if (req.user.status != USER_STATE.INACTIVE) {
      //     next();
      //   } else {
      //     req.flash('error', 'このユーザーネームはADMINからロックがかかっています。');
      //     res.redirect('/login');
      //   }
      // } else {
      //   req.flash('error', '無効のユーザーネーム又は、パスワード');
      //   res.redirect('/login');
      // }

    } else {
      console.log('***2***');
      // req.flash('error', 'ユーザーネームとパスワードを入力してください。');
      res.redirect('/login');
    }
  },

  ensureUnauthenticated: function(req, res, next) {
    if (!_.isUndefined(req.body.username)) {
      req.flash('username', req.body.username);
    }
    if (req.isAuthenticated()) {
      if ((req.user.role == ROLES.OPERATOR || req.user.role == ROLES.ADMIN) && req.user.status != USER_STATE.INACTIVE) {
        res.redirect('/dashboard');
      }
    }
    next();

  },

  isAdmin: function(req) {
    if (req.isAuthenticated() && req.user.role == ROLES.ADMIN) {
      return true;
    }

    return false;
  },

  isStaff: function(req) {
    if (req.isAuthenticated() && req.user.role == ROLES.STAFF) {
      return true;
    }

    return false;
  },

  checkAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      res.locals.user = req.user;
    }

    next();
  }
};

