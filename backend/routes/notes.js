const express = require('express');
const Notes = require('../models/notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// To fetch all notes of user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

// To add notes
router.post('/add', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        await Notes.create({ title, description, tag, user: req.user.id });
        res.send({
            success: true,
            message: 'Data added'
        })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

// To Update notes
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    //Find the note to be updated and update it
    const note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not found") }

    try {
        const { title, description, tag } = req.body;
    //create a new note object
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    // Allow updation only if user own this note
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }
    await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({
        "success": "true",
        "message": "notes updated"
    })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }


    
})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    await Notes.findByIdAndDelete(req.params.id);
    res.json({
        "success": "true",
        "message": "Deleted"
    })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;