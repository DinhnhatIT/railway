const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING,
  DATABASE_NAME: process.env.DATABASE_NAME,
};
