require("dotenv").config();

const production = {
  use_env_variable: process.env.DATABASE_URL,
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true,
  },
};

const local = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
};

module.exports = process.env.DEPLOYMENT_NAME === "heroku" ? production : local;
