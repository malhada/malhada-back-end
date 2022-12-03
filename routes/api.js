const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ "api": "test" });
});

module.exports = router;