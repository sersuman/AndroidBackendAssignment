var express = require('express');
var router = express.Router();


const post_controller =require('../../api_controller/post_controller');


// add post
router.post('/addPost',post_controller.addPost);

module.exports = router;