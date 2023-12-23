const dotenv = require("dotenv");
dotenv.config();

const allowOrigins = [process.env.CORS_ORIGIN];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = {
  corsOptions,
};
