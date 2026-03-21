const express = require("express");
const app = express();
const prisma = require("./prisma");
const { log } = require("node:console");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on port 30000");
});
