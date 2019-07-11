const knex = require('knex');
const config = require('../knexfile');

const dbClient = knex(config);

function order(request, response) {
  const cuisine_id = request.body.cuisine_id;
  const quantity = request.body.quantity;
  const price = request.body.price;
  const user_id = request.body.user_id;
  const restaurant_id = request.body.restaurant_id;
  const restaurant_table = request.body.restaurant_table;


 
  dbClient
    .table('order_food')
    .insert({
      //this must be same for database's column
      cuisine_id: cuisine_id,
      quantity: quantity,
      price: price,
      user_id: user_id,
      restaurant_id: restaurant_id,
      restaurant_table: restaurant_table
    })
    .then(data => {
      response.json({
        success: 'true',
        status: 'success',
        message: 'Order successful',
        
      })
    })
    .catch(error => {
      console.log(error);
      response.json({
        success: 'fail',
        status: 'fail',
        message: 'Order Failed',
      })
    })

}


module.exports = {
  'order': order
}