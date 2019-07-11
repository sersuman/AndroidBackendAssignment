

 exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('post_tag')
    return await knex.schema.createTable('post_tag', table=>{
        table.increments('post_tag_id').primary();
        table.integer('post_id');
        table.integer('tag_user_id');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('post_tag')
};

