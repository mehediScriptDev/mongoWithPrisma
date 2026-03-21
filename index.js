const cookieParser = require("cookie-parser");
const express = require("express");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prisma = require("./prisma");
const { log } = require("node:console");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on port 30000");
});
