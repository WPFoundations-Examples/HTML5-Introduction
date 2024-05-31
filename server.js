const express = require("express");
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/anchor-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/anchor-example.html"));
});

app.get("/img-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/img-example.html"));
});

app.get("/list-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/list-example.html"));
});

app.get("/text-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/text-example.html"));
});

app.get("/audio-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/audio-example.html"));
});

app.get("/image-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/image-example.html"));
});

app.get("/table-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/table-example.html"));
});

app.get("/video-example", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/video-example.html"));
});

// Handle '404' errors

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// listen on HTTP_PORT

app.listen(HTTP_PORT, ()=>{console.log("Express http server listening on: " + HTTP_PORT);});