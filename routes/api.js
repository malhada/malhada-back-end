const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");


router.get("/", (req, res) => {
  if (!req.user) {
    res.json({ "error": "Not logged in." });
  } else {
    res.json({ "api": "test" });
  }
});

router.post("/sign-up", userController.user_create_post);

module.exports = router;