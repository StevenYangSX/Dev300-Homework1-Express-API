const express = require('express');
const router = express.Router();
const pug = require("pug");
const allBooks = require('../books.json');

//const allBooksObject = JSON.parse(allBooks);
//console.log(allBooks);
//@route   GET  /files
//@desc      Get all files
// const dataIn = {
//     books: allBooks
// }
// const what = {
//     booklist: dataIn
// }
// console.log(what);

router.get('/', (req, res) => {
    //res.send("hello");
    res.render('index', {
        booklist: allBooks
    });
})

router.get('/:bookId', (req, res) => {
    //res.send("hello");
    const theBook = allBooks.filter(ele => req.params.bookId == ele.isbn);
    console.log("======>", theBook);
    res.render('details', {
        bookNeeded: theBook
    });
    //res.send(req.params.bookId);
})


module.exports = router;