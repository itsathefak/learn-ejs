const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:userName", (req, res) => {
  let { userName } = req.params;
  res.render("instagram.ejs", { userName });
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

app.listen(3000, () => {
  console.log(`Listening on Port ${port}`);
});
