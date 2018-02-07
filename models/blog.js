// jshint esversion: 6, node: true

"use strict";

const mongoose = require('mongoose');
const config = require('../config/database');

const BlogSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  tags: [],
  username: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  modifiedDate: {
    type: Date,
    default: Date.now,
  },
});

const Blog = module.exports = mongoose.model('Blog', BlogSchema);

module.exports.countBlogs = function(blogObj, callback) {
  if (blogObj.tag) {
    Blog.find({ tags: blogObj.tag }).count(callback);
    } else {
      if (blogObj.searchString) {
        Blog.find({$or: [
          { heading: new RegExp(blogObj.searchString, "i")},
          { tags: new RegExp(blogObj.searchString, "i")},
        ]}).
        count(callback);
      } else {
        Blog.find().count(callback);
      }
    }
};

module.exports.getBlogs = function(pn, tag, callback) {
  if (tag === null) {
    Blog.
      find().
      sort('-modifiedDate').
      select('heading username tags modifiedDate').
      skip(pn*10).
      limit(10).
      exec(callback);
    } else {
      Blog.
        find({ tags: tag }).
        sort('-modifiedDate').
        select('heading username tags modifiedDate').
        skip(pn*10).
        limit(10).
        exec(callback);
    }
};

module.exports.searchBlog = function(searchObj, callback) {
  Blog.
    find({$or: [
      { heading: new RegExp(searchObj.searchString, "i")},
      { tags: new RegExp(searchObj.searchString, "i")},
    ]}).
    sort('-modifiedDate').
    select('heading username tags modifiedDate').
    skip(searchObj.pn*10).
    limit(10).
    exec(callback);
};

module.exports.getBlogById = function(id, callback) {
  Blog.findById(id, callback);
};

module.exports.insertBlog = function(newBlog, callback) {
  newBlog.save(callback);
};

module.exports.editBlog = function(blog, callback) {
  Blog.findOneAndUpdate({ _id: blog.id}, { $set: { heading: blog.heading, tags: blog.tags, body: blog.body, modifiedDate: blog.modifiedDate }}).
  exec(callback);
};

module.exports.getBlogByUsername = function(username, callback) {
  const query = { username: username };
  Blog.find(query).sort('-modifiedDate').exec(callback);
};

module.exports.deleteBlog = function(blogId, callback) {
  Blog.find({ _id: blogId }).remove(callback);
};
