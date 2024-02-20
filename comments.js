// Create web server
// Create a new comment
// Get all comments
// Get comment by id
// Update comment by id
// Delete comment by id

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Create a new comment
router.post('/', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        const result = await comment.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get comment by id
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update comment by id
router.put('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete comment by id
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;