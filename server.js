const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();




//all routes
app.use('/files', require('./router/fileSystem'));


app
  .get("/", (req, res) => {
    res.send("server is up on port 3000. test again...");
  })
  .listen(3000);