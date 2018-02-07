// jshint esversion: 6, node: true

"use strict";

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const passport = require('passport');
const Comment = require("../models/comment");

router.post('/addComment', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const newComment = new Comment({
    for: req.body.for,
    id: req.body.id,
    username: req.body.username,
    body: req.body.body,
  });
  Comment.addComment(newComment, (err, data) => {
    if (err) {
      console.log(`Error adding comment
        ${err}`);
      res.json({
        success: false,
        msg: "Error adding comment",
      });
    } else {
      res.json({
        success: true,
        msg: "Successfully added comment",
      });
    }
  });
});

router.post('/searchComments', (req, res, next) => {
  const commentData = {
    for: req.body.for,
    id: req.body.id,
  };
  Comment.searchComments(commentData, (err, data) => {
    if (err) {
      console.log(`Error in searching comments
        ${err}`);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
