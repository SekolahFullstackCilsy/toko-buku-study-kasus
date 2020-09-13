module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "products",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          unique: true,
        },
        name: Sequelize.STRING(255),
        description: Sequelize.TEXT,
        user_id: {
          type: Sequelize.UUID,
          references: {
            model: "users",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        price: Sequelize.FLOAT,
        stock: Sequelize.INTEGER,

        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW(),
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW(),
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("products");
  },
};
