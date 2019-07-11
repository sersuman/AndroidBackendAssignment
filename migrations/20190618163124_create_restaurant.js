
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('restaurant')
    return await knex.schema.createTable('restaurant', table=>{
        table.increments('restaurant_id').primary();
        table.string('restaurant_name');
        table.string('restaurant_type');
        table.string('restaurant_location');
        table.string('restaurant_open_hours');
        table.integer('restaurant_service_charge');
        table.string('restaurant_about');
        table.string('restaurant_profile_image');
        table.string('restaurant_cover_image');

    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('restaurant')
};