const express = require("express");
const router = express.Router();
const path = require("path");

// Define a route handler for GET requests to the root path '/' or '/index' with optional '.html' extension
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
