exports.up = function (knex) {
  return knex.schema.createTable("files", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));    
    table.string("path");
    table.string("type").notNullable();
      
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));

    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));

    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("files");
};
