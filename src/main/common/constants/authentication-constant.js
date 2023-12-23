const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_DEFAULT_EXPIRED_TIME: process.env.JWT_DEFAULT_EXPIRED_TIME,
};
