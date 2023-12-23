const express = require("express");

const userService = require("../service/user-service");
const { log } = require("../common/utils/log-utils");

const userController = express.Router();

userController.get("/", async function (req, res) {
  log.info("UserController", "getAllUser Start");

  res.send(await userService.getAll());

  log.info("UserController", "getAllUser End");
});

userController.get("/:userId", async function (req, res) {
  log.info("UserController", "getUserById Start");

  const userId = req.params.userId;
  const foundUser = await userService.getById(userId);
  if (!foundUser) res.status(400);
  res.send(foundUser);

  log.info("UserController", "getUserById End");
});

module.exports = userController;
