const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  res.render("rolldice.ejs");
});

app.listen(3000, () => {
  console.log(`Listening on Port ${port}`);
});
