// jshint esversion: 6, node: true

"use strict";

const express = require('express');
const router = express.Router();
const passport  = require('passport');
const config = require('../config/database');
const Blog = require('../models/blog');

router.post('/', (req, res, next) => {
  const pageNumber = req.body.pn;
  const tag = req.body.tag;
  Blog.getBlogs(pageNumber, tag, (err, data) => {
    if (err) {
      console.error(` Error in fetching blogs
        ${err}`);
        res.json({
          success: false,
          msg: 'An error occured',
        });
    } else {
      res.send(data);
    }
  });
});

router.post('/countBlogs', (req, res, next) => {
  const blogObj = {
    tag: req.body.tag,
    searchString: req.body.searchString,
  };

  Blog.countBlogs(blogObj, (err, data) => {
    if (err) {
      console.error(` Error in fetching blogs
        ${err}`);
        res.json({
          success: false,
          msg: 'An error occured',
        });
    } else {
      res.json({
        success: true,
        count: data,
      });
    }
  });
});

router.post('/searchBlogs', (req, res, next) => {
  const searchObj = {
    pn: req.body.pn,
    searchString: req.body.searchString,
  };
  Blog.searchBlog(searchObj, (err, data) => {
    if (err) {
      console.log(`error in searching data ${err}`);
    } else {
      res.send(data);
    }
  });
});

router.post('/getBlogById', (req, res, next) => {
  Blog.getBlogById(req.body.id, (err, data) => {
    if (err) {
      console.error(` Error in fetching blogs by id
        err`);
        res.json({
          success: false,
          msg: 'An error occured',
        });
    } else {
      res.json(data);
    }
  });
});

router.post('/getBlogByUsername', (req, res, next) => {
  Blog.getBlogByUsername(req.body.username, (err, data) => {
    if (err) {
      console.error(` Error in fetching blogs by username
        err`);
        res.json({
          success: false,
          msg: 'An error occured',
        });
    } else {
      res.json(data);
    }
  });
});

router.post('/addBlog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const newBlog = new Blog({
    username: req.body.username,
    tags: req.body.tags,
    heading: req.body.heading,
    body: req.body.body,
  });
  Blog.insertBlog(newBlog, (err, blog) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: 'Something went wrong please try again.',
      });
    } else {
      res.json({
        success: true,
        msg: 'Blog posted successfully.',
      });
    }
  });
});

router.post('/editBlog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const blog = {
    id: req.body.id,
    heading: req.body.heading,
    tags: req.body.tags,
    modifiedDate: Date.now(),
    body: req.body.body,
  };

  Blog.editBlog(blog, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Something went wrong",
      });
    } else {
      res.json({
        success: true,
        msg: "Blog edited successfully",
      });
    }
  });
});

router.post('/deleteBlog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const blogId = req.body.id;
  Blog.deleteBlog(blogId, (err, data) => {
    if (err) {
      console.log(`Error in deleting blog ${ blogId } ---
        ${err}`);
      res.json({
        success: false,
        msg: "Something went wrong",
      });
    } else {
      res.json({
        success: true,
        msg: "Blog deleted successfully",
      });
    }
  });
});

module.exports = router;
