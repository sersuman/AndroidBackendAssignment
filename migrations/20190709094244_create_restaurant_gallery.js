
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('restaurant_gallery')
    return await knex.schema.createTable('restaurant_gallery', table=>{
        table.increments('restaurant_galelry_id').primary();
       
        table.integer('restaurant_id');
        table.string('restaurant_image');

    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('restaurant_gallery')
};