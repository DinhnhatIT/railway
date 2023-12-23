const express = require("express");
const cors = require("cors");

const controllers = require("./controller");
const routingConstant = require("./common/constants/routing-constant");
const authenticationConfig = require("./config/authentication-config");
const corsConfig = require("./config/cors-config");

const app = express();

// Setup public folder for project
app.use(express.static("public"));

// CORS config
app.use(cors(corsConfig.corsOptions));

// Authentication filter for project
authenticationConfig.get().forEach((config) => {
  app.get(routingConstant.BASE + config.requestMapping, config.action);
});

// Routing to controller
controllers.get().forEach((controller) => {
  app.use(routingConstant.BASE + controller.path, controller.target);
});

// Start app in a port
if (!module.parent) {
  app.listen(routingConstant.PORT);
  console.log("Application started on port " + routingConstant.PORT);
}
