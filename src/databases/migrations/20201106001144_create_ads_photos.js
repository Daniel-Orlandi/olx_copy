exports.up = function (knex) {
  return knex.schema.createTable("ads_photos", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));    
    table.uuid("ad_id");       
    table.uuid("file_id");    
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));

    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    
    table.foreign("ad_id").references("id").inTable("ads");
    table.foreign("file_id").references("id").inTable("files");
     
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ads_photos");
};
