const fs = require("fs");
const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const pug = require("pug")
const app = express();


const allBooks = require("./books.json");
///console.log(allBooks);
//Database Connection
connectDB();

//init middleware for body parser
app.use(
  express.json({
    extended: false
  })
);

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.set('views', './views'); // default, but if you specify don't make mistake on this                        

app.get("/with-cors", cors(), (req, res, next) => {
  res.json({
    msg: "WHOAH with CORS it works! 🔝 🎉"
  });
});

//all routes
app.use("/files", cors(), require("./router/fileSystem"));
app.use('/books', cors(), require("./router/bookList"));


app
  .get("/", cors(), (req, res) => {
    res.send("server is up on port 3000. test again...");
  })
  .listen(3000);