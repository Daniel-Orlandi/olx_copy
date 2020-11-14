// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "olx",
      user: "postgres",
      password: "postgres",
      port: 5432,
    },
    pool: {
      min: 20,
      max: 100,
    },
    migrations: {
      directory: "./src/databases/migrations",
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/databases/test.sqlite",
    },
    migrations: {
      directory: "./src/databases/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "./src/databases/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 20,
      max: 30,
    },
    migrations: {
      directory: "./src/databases/migrations",
    },
  },
};
