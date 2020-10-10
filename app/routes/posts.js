const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postController');

//list
router.get('/new',postsController.getList);

// New Post Form
router.get('/new',postsController.getPostForm);

//New Post Process
router.post('/new', postsController.insertProcess);

module.exports = router;