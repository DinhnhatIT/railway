const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  BASE: process.env.API_BASE_PATH,
  CONTROLLERS: {
    USER: "/users",
    BOOK: "/books",
  },
};
