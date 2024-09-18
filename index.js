const express = require("express");

const app = express();

let port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log(`Listening on Port ${port}`);
});
