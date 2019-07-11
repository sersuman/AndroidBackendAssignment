exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('cuisine_category')
    return await knex.schema.createTable('cuisine_category', table=>{
        table.increments('cuisine_category_id').primary();
        table.string('cuisine_category_name');
        table.string('cuisine_category_details');
        table.integer('restaurant_id');
        table.string('category_image');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('cuisine_category')
};