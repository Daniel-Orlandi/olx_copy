const knex = require("knex")
const config_file = require("../../knexfile")
const connection = knex(config_file.development)

module.exports = connection
