const userController = require("./user-controller");
const bookController = require("./book-controller");
const routingConstant = require("../common/constants/routing-constant");

const get = () => {
  return [
    {
      path: routingConstant.CONTROLLERS.USER,
      target: userController,
    },
    {
      path: routingConstant.CONTROLLERS.BOOK,
      target: bookController,
    },
  ];
};

module.exports = {
  get,
};
