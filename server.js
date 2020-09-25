const express = require("express");
const path = require("path");


const app = express();
const PORT = 8080;

const noteData = [];

app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "db.json"));
});

// readFileAsync (filename, json)

app.post("/api/notes", function(req,res) {
    const newNote = req.body;
    // Use FS to read db.json
    // Use JSON.parse to get result (array) in JS
    // push new note to result array
    // JSON.stringify array
    //Use FS to write this in db.json
});

app.delete("/api/notes/:id", function(req,res) {
    const noteID = req.params.id
    // Use FS to read db.json
    // use JSON.parse to get result array in JS
    // Loop over aray to find matching id (noteID)
    // Remove note with matching id from array
    // JSON.stringify to turn back to json
    // Use FS to write to db.json
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})