const path = require("path");
const router = require("express").Router();

// "/notes" responds with the notes.html file
router.get("/", function(req, res) {
  res.send(path.join(__dirname, "../public/notes.html"));
});

// All other routes responds with the index.html file
router.get("*", function(req, res) {
  res.send(path.join(__dirname, "../public/index.html"));
});

module.exports = router;