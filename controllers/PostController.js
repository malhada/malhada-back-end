const Post = require("../models/Post");
const { body, validation } = require("express-validator");
const async = require("async");
const bcrypt = require("brcypt");

exports.index = (req, res, next) => {
  if (!req.user) {
    res.json({"error": "User not found"});
  }
};

