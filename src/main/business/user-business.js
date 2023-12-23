const userRepository = require("../repository/user-repository");
const { log } = require("../common/utils/log-utils");

const UserBusiness = {
  async getById(id) {
    log.debug("UserBusiness", "getById Start | id = " + id);
    const foundUser = await userRepository.findById(id);
    log.debug("UserBusiness", "getById End | id = " + id);
    return foundUser;
  },
  async getAll() {
    log.debug("UserBusiness", "getAll Start");
    const users = await userRepository.findAll();
    log.debug("UserBusiness", "getAll End");

    return users;
  },
};

module.exports = UserBusiness;
