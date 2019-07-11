var express = require('express');
var router = express.Router();


const order_controller =require('../../api_controller/order_controller');


// add post
router.post('/order',order_controller.order);

module.exports = router;