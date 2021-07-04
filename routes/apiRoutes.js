const router = require("express").Router();
const fs = require("fs");

// GET "/api/notes" responds with all notes from the databse
router.get("/notes", function(req, res) {
  fs.readFile("db/db.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    res.json(JSON.parse(jsonString));
  });
});
// POST "/api/notes" responds with new note after adding a new note to database
router.post("/notes", ({ body }, res) => {
  const rawData = fs.readFileSync("db/db.json");
  const parseData = JSON.parse(rawData);
  const newObj = parseData.concat(newObj);
  const string = JSON.stringify(newObj);
  fs.writeFile("db/db.json", string, function(err) {
    if (err) console.log(err);
    res.json(string);
  });
});

// DELETE "/api/notes/:id" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", function(req, res) {
  const rawData = fs.readFileSync("db/db.json");
  const parseData = JSON.parse(rawData);
  const newData = parseData.filter(obj => {
    return obj.id != req.params.id;
  });
  fs.writeFile("db/db.json", JSON.stringify(newData)),
    function(err) {
      if (err) console.log(err);
      res.send(newData);
    };
});

module.exports = router;