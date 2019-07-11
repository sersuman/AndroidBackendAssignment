

    exports.up = async function(knex, Promise) {
        await knex.schema.hasTable('order')
        return await knex.schema.createTable('order', table=>{
            table.increments('order_id').primary();
            table.integer('user_id');
            table.integer('restaurant_id');
            table.integer('restaurant_table');
            table.date('order_time');
        });
    };
    
    exports.down = function(knex, Promise) {
        knex.schema.dropTable('order')
    };