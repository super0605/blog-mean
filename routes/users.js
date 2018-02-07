//jshint esversion:6, node: true

"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    securityQuestion: req.body.securityQuestion,
    securityAns: req.body.securityAns,
  });

  User.getUserByUsername(newUser.username, (err, data) => {
    if(!data) {
      User.addUser(newUser, (err, user) => {
        if(err){
          res.json({success: false, msg: 'Something went wrong :(. Please try again'});
        } else {
          res.json({success: true, msg:'Successfully Registered :)'});
        }
      });
    } else {
      res.json({success: false, msg:'Username Already Taken'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'Invalid Username',
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        let token = jwt.sign(user, config.secret, {
          expiresIn: 608400,
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
          }
        });
      } else {
        res.json({
          success: false,
          msg: 'Invalid Password',
        });
      }
    });
  });
});

// Profile
router.post('/profile', (req, res, next) => {
  const username = req.body.username;
  User.getUserByUsername(username, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        status: true,
        username: data.username,
        email: data.email,
        name: data.name,
      });
    }
  });
});

router.post('/forgotPassword/username', (req, res, next) => {
  let username = req.body.username;
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (user) {
      res.json({
        success: true,
        securityQuestion: user.securityQuestion,
      });
    } else {
      res.json({
        success: false,
        msg: 'Invalid Username',
      });
    }
  });
});

router.post('/forgotPassword/answer', (req, res, next) => {
  let username = req.body.username;
  let answer = req.body.answer;
  let password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if(answer === user.securityAns) {
      user.password = password;
      User.updatePassword(user, (err, data) => {
        if (err) throw err;
        res.json({
          success: true,
          msg: 'Password Changed',
        });
      });
    } else {
      res.json({
      success: false,
      msg: 'Wrong Answer',
    });
    }
  });
});


module.exports = router;
