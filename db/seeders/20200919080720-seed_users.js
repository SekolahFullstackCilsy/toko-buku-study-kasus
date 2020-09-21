const bcrypt = require("bcryptjs");
const uuid = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = "12345678";
    const hashedPassword = await bcrypt.hash(password, 12);
    return queryInterface.bulkInsert("users", [
      {
        id: uuid.v4(),
        name: "Admin",
        email: "admin@gmail.com",
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
        name: "User",
        email: "user@gmail.com",
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
