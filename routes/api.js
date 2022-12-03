const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/UserController");
const postController = require("../controllers/PostController");

router.get("/", (req, res) => {
  if (!req.user) {
    res.json({ error: "Not logged in." });
  } else {
    res.json({ api: "test" });
  }
});

router.post("/sign-up", userController.user_create_post);
router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api",
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ "msg": "Logged out." });
  });
});

router.get("/post", postController.index);

module.exports = router;
