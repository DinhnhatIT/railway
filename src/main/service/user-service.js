const UserBusiness = require("../business/user-business");
const { log } = require("../common/utils/log-utils");

const UserService = {
  async getById(id) {
    log.debug("UserService", "getById Start | id = " + id);
    const foundUser = await UserBusiness.getById(id);
    log.debug("UserService", "getById End | id = " + id);

    return foundUser;
  },
  async getAll() {
    log.debug("UserService", "getAll Start");
    const users = await UserBusiness.getAll();
    log.debug("UserService", "getAll End");

    return users;
  },
};

module.exports = UserService;
