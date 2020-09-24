const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "db.json"));
});

app.post("/api/notes", function(req,res) {
    
});

app.delete("/api/notes/:id", function(req,res) {

});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})