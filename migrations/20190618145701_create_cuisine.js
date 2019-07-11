
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('cuisine')
    return await knex.schema.createTable('cuisine', table=>{
        table.increments('cuisine_id').primary();
        table.string('cuisine_name');
        table.integer('cuisine_price');
        table.string('cuisine_description');
        table.string('cuisine_image');
        table.integer('cuisine_category_id');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('cuisine')
};
