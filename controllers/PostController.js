const Post = require("../models/Post");
const { body, validation } = require("express-validator");
const async = require("async");
const bcrypt = require("bcrypt");

exports.index = (req, res, next) => {
  if (!req.user) {
    res.json({"error": "Not logged in."});
  } else {
    Post.find({})
      .sort({ _id: -1 })
      .populate("text")
      .populate("likes")
      .populate("comments")
      .exec(function(err, list_post) {
        if (err) {
          return next(err)
        }
        res.json(list_post);
      })
  }
};

