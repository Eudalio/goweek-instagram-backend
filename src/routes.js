const express = require('express');
const multer = require('multer');
const PostController = require('../src/controllers/PostController');

const routes = new express.Router();
const upload = multer();

app.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;