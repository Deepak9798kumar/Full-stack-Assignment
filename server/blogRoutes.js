const express = require('express');
const router = express.Router();
const BlogPost = require('./blogModel');

// Create blog post
router.post('/posts', (req, res) => {
    const newPost = new BlogPost(req.body);
    newPost.save().then(post => res.json(post));
});

router.get('/posts', (req, res) => {
    BlogPost.find().then(posts => res.json(posts));
});

router.get('/posts/:id', (req, res) => {
    BlogPost.findById(req.params.id).then(post => res.json(post));
});

router.put('/posts/:id', (req, res) => {
    BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(post => res.json(post));
});

router.delete('/posts/:id', (req, res) => {
    BlogPost.findByIdAndDelete(req.params.id).then(() => res.json({ success: true }));
});

module.exports = router;
