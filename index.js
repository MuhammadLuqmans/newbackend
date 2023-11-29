const express = require("express");
const app = express();
const port = 5135;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("You have enter twitter entity");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
