
exports.up = function (knex) {
  return knex.schema.createTable("ads", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.decimal("value",10,2).notNullable();
    table.date("publishing_date").notNullable();
    table.uuid("user_id");         
    table.integer("status").notNullable().defaultTo(1);
    table.string("condition",20).notNullable()
    
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));

    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));

    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ads");
};
