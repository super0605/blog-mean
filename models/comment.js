// jshint esversion: 6, node: true

"use strict";

const mongoose = require('mongoose');
const config = require("../config/database");

const CommentSchema = mongoose.Schema({
  for: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);

module.exports.addComment = function(newComment, callback) {
  newComment.save(callback);
};

module.exports.searchComments = function(commentData, callback) {
  Comment.find({ for: commentData.for, id: commentData.id }).
  sort("-date").
  select("username body date").
  exec(callback);
};

module.exports.deleteComment = function(commentId, callback) {
  Comment.find({ _id: commentId }).remove(callback);
};
