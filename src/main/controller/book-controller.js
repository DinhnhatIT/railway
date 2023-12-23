const express = require("express");

const bookController = express.Router();

bookController.get("/books/", function (req, res) {
  res.send(users);
});

bookController.get("/books/:bookId", function (req, res) {
  const userId = req.params.userId;
  const foundUser = users.filter((user) => user.id.toString() === userId);
  res.send(foundUser);
});

module.exports = bookController;
