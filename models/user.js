//jshint esversion:6, node: true

"use stcict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    deafult: Date.now,
  },
  securityQuestion: {
    type: String,
  },
  securityAns: {
    type: String,
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback){
  const query = { username: username };
  User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.updatePassword = function(user, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) throw err;
      user.password = hash;
      User.update({ username: user.username }, { password: user.password }, callback);
    });
  });
};

module.exports.comparePassword = function(enteredPassword, hash, callback) {
  bcrypt.compare(enteredPassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
