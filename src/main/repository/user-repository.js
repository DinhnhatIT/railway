const { log } = require("../common/utils/log-utils");
const databaseConstant = require("../common/constants/database-constant");
const MongoDBClient = require("../common/mongodb/mongodb");

let userClient = null;

const users = [
  { id: "1", name: "Hoang Dinh Nhat", email: "hoangdinhnhat123@gmail.com" },
  { id: "2", name: "Hoang Dinh Bao", email: "hoangdinhbao3c@gmail.com" },
];

const UserRepository = {
  async createConnect() {
    if (userClient) return userClient;

    userClient = await new MongoDBClient(
      databaseConstant.CONNECTION_STRING,
      databaseConstant.DATABASE_NAME,
      "user"
    );

    return userClient;
  },
  async findById(id) {
    await this.createConnect();
    log.debug("UserRepository", "findById Start | id = " + id);
    const foundUser = await userClient.getOne({ _id: id });
    log.debug("UserRepository", "findById End | id = " + id);

    return foundUser;
  },
  async findAll() {
    await this.createConnect();
    log.debug("UserRepository", "findAll Start");
    const allUser = await userClient.getAll();
    log.debug("UserRepository", "findAll End");

    return allUser;
  },
};

module.exports = UserRepository;
