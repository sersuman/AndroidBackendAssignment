const knex = require('knex');
const config = require('../knexfile');

const dbClient = knex(config);


function searchRestaurant(req, res) {
    let search = req.params.search;
    console.log(search);
   dbClient('restaurant')
      .select({
        restaurant_id: 'restaurant_id',
        restaurant_name: 'restaurant_name',
        restaurant_type: 'restaurant_type',
        restaurant_location: 'restaurant_location',
        restaurant_open_hours: 'restaurant_open_hours',
        restaurant_service_charge: 'restaurant_service_charge',
        restaurant_about: 'restaurant_about',
        restaurant_profile_image: 'restaurant_profile_image',
        restaurant_cover_image: 'restaurant_cover_image'
      })
      .where('restaurant_name','like','%'+search+'%')
  
      .then(data => { //data aauncha
        res.json(data)

      })
      .catch(function (error) {
        console.log(error);
      });
  
      
  
  }



module.exports = {
'searchRestaurant':searchRestaurant
}