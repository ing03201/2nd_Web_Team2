exports.up = async function up(knex) {
  await knex.schema.createTable('board', table => {
    table
      .increments('id')
      .unsigned()
      .notNullable()
      .primary(['board_job_pkey']);
    table.integer('post_no').notNullable();
    table.string('category').notNullable();
    table.string('writer').notNullable();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('views').notNullable();
    table.integer('applications').notNullable();//
    table
      .timestamp('writed_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table.string('club').notNullable(); 
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('board');
};
