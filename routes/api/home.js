var express = require('express');
var router = express.Router();



const home_controller =require('../../api_controller/home_controller');


router.get('/:search/restaurant',home_controller.searchRestaurant);


module.exports = router;
