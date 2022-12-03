const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.user_create_post = [
  body("username")
    .trim()
    .isLength({ min: 4 })
    .withMessage("Minimum username length is 4 chracters.")
    .escape()
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (user) {
        return Promise.reject("Username already in use.");
      }
    }),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Minimum password length is 6 chracters.")
    .escape(),
  body("password_confirm")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Minimum password length is 6 characters.")
    .escape()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password.")
      }
      return true;
    }),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.send({ errors: errors.array() });
        return;
      }
      var date = new Date();
      bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        const user = new User({
          username: req.body.username,
          password: hashedPassword,
          time_created: date.toUTCString(),
        }).save((err) => {
          if (err) {
            return next(err)
          }
          return;
        })
      })
    }
];