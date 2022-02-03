const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://qtplycwj:z1jpnRzKqSuMPb23bs3dgZocAUwYDq1L@otto.db.elephantsql.com/qtplycwj",
} = process.env;

// const {
//   NODE_ENV = "development",
//   DEVELOPMENT_DATABASE_URL,
//   PRODUCTION_DATABASE_URL,
// } = process.env;

// const URL =
//   NODE_ENV === "production"
//     ? PRODUCTION_DATABASE_URL
//     : DEVELOPMENT_DATABASE_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
