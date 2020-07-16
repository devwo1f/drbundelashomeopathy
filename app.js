//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/covid", function (req, res) {
  res.render("covid");
})

app.get("/science-and-homeopathy", function (req, res) {
  res.render("science-and-homeopathy");
})

app.get("/hahnemann", function (req, res) {
  res.render("hahnemann");
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
