const express = require('express');
const router = express.Router();

//@route   GET  /files
//@desc      Get all files
router.get('/', (req, res) => {
    res.send("Get all files")
})


//@route   GET  /files
//@desc      Get all files
router.get('/:fileName', (req, res) => {
    res.send("Get all files")
})

//@route   POST  /files
//@desc      Get all files
router.post('/:fileName', (req, res) => {
    res.send("Create A File")
})

//@route   PUT  /files
//@desc      Get all files
router.put('/:fileName', (req, res) => {
    res.send("Change a file")
})

//@route   DELETE  /files
//@desc      Get all files
router.delete('/:fileName', (req, res) => {
    res.send("Delete a file")
})



module.exports = router;