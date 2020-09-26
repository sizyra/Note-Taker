const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8080;

//const noteData = require("./db/db.json");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: "true"
}));

app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req,res) {
    let read = fs.readFileSync(path.join(__dirname, "./db/db.json"), "utf-8");

    let parsed = JSON.parse(read);

    parsed.forEach((note, i) => note.id = i);

    res.json(parsed);
});

// readFileAsync (filename, json)

app.post("/api/notes", function(req,res) {
    const newNote = req.body;
    console.log(newNote);
    // Use FS to read db.json
    let read = fs.readFileSync(path.join(__dirname, "./db/db.json"), "utf-8");
    // Use JSON.parse to get result (array) in JS
    let array = JSON.parse(read);
    // push new note to result array
    array.push(newNote);
    //Use FS to write this in db.json
    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(array));
});

app.delete('/api/notes/:id', function(req,res)  {
    const deleteID = parseInt(req.params.id);

    const read = JSON.parse(fs.readFileSync(path.join(__dirname, "./db/db.json"), "utf-8"));

    read.splice(deleteID, 1);

    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(read));

    res.json(true);
});

app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})