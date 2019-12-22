const express = require('express');
const router = express.Router();
const Files = require('../models/Files');

//personal middle ware
const fileValidation = require('../middleWares/fileValidation');

//@route   GET  /files
//@desc      Get all files
router.get('/', async (req, res) => {
    try {
        const files = await Files.find()
        if (files.length === 0) {
            return res.send("No files in the Database.")
        } else {
            return res.json(files);
        }
    } catch (error) {
        console.log(error.message);
    }
})


//@route   GET  /files
//@desc      Get all files
router.get('/:fileName', async (req, res) => {
    try {
        const file = await Files.findOne({
            title: req.params.fileName
        })
        if (!file) {
            return res.send(`File ${req.params.fileName} does not exist.`)
        } else {
            return res.json(file);
        }
    } catch (error) {
        console.log(error.message);
    }
})

//@route   POST  /files
//@desc      Get all files
router.post('/', async (req, res) => {
    if (fileValidation(req.body)) {
        //finish validation. Continue
        const {
            title,
            content
        } = req.body;

        try {
            let file = await Files.findOne({
                title: title
            })
            if (file) {
                return res.status(400).send("File Already Exists...")
            }

            file = new Files({
                title: title,
                content: content
            });

            await file.save();

            res.json(file);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }

    } else {
        res.status(400).send("bad request. Please check request body. It should be a JSON file with properties: title and content")
    }




})

//@route   PUT  /files
//@desc      Get all files
router.put('/:fileName', async (req, res) => {
    try {
        let file = await Files.findOne({
            title: req.params.fileName
        })
        if (!file) {
            return res.send(`File ${req.params.fileName} does not exist.`)
        } else {
            if (fileValidation(req.body)) {
                file.title = req.body.title;
                file.content = req.body.content;
                await file.save();
                res.json(file)
            } else {
                res.status(400).send("Bad request. Please check request body. It should be a JSON file with propertyies: title and content")
            }
        }
    } catch (error) {
        console.log(error.message);
    }
})

//@route   DELETE  /files
//@desc      Get all files
router.delete('/:fileName', async (req, res) => {
    try {
        const file = await Files.findOne({
            title: req.params.fileName
        })
        if (!file) {
            return res.send(`File ${req.params.fileName} does not exist.`)
        } else {
            await file.remove();
            res.send(`File ${req.params.fileName} has been removed.`)
        }
    } catch (error) {
        console.log(error.message);
    }
})



module.exports = router;