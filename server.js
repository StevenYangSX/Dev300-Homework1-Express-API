const fs = require("fs");
const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

//Database Connection
connectDB();

//init middleware for body parser
app.use(
  express.json({
    extended: false
  })
);

app.get("/with-cors", cors(), (req, res, next) => {
  res.json({ msg: "WHOAH with CORS it works! 🔝 🎉" });
});

//all routes
app.use("/files", cors(), require("./router/fileSystem"));

app
  .get("/", cors(), (req, res) => {
    res.send("server is up on port 3000. test again...");
  })
  .listen(3000);
