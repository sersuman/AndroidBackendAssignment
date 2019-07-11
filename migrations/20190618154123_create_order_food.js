

    exports.up = async function(knex, Promise) {
        await knex.schema.hasTable('order_food')
        return await knex.schema.createTable('order_food', table=>{
            table.increments('order_food_id').primary();
            table.integer('order_id');
            table.integer('cuisine_id');
            table.integer('quantity');
            table.integer('price');
        });
    };
    
    exports.down = function(knex, Promise) {
        knex.schema.dropTable('order_food')
    };