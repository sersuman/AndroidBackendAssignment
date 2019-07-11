var express = require('express');
var router = express.Router();



const restaurant_controller =require('../../api_controller/restaurant_controller');


router.get('/:id/restaurant-category',restaurant_controller.getRestaurantCategory);

router.get('/:id/restaurant-cuisine',restaurant_controller.getRestaurantCuisine);
router.get('/:id/restaurant',restaurant_controller.getRestaurantById);
// add restaurant
router.post('/registerRestaurant',restaurant_controller.registerRestaurant);

//add cuisine category
router.post('/addCuisineCategory',restaurant_controller.addCuisineCategory);

// add cuisine
router.post('/addCuisine',restaurant_controller.addCuisine);


router.get('/',restaurant_controller.getAllRestaurant)



router.delete('/:id/delete',restaurant_controller.deleteRestaurant);
router.delete('/:id/delete-category',restaurant_controller.deleteCategory);
router.delete('/:id/delete-cuisine',restaurant_controller.deleteCuisine);


router.get('/:id/cuisine',restaurant_controller.getCuisineByCategoryId);


//for post images
router.get('/:id/restaurantImages',restaurant_controller.restaurantImages);

//for post images
router.get('/:id/restaurant',restaurant_controller.getRestaurantById)
module.exports = router;
