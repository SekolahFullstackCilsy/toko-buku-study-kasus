const sequelize = require("../../config/sequelize");
const Sequelize = require("sequelize");

class ProductModel extends Sequelize.Model {}

ProductModel.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: Sequelize.STRING(255),
    description: Sequelize.TEXT,
    user_id: Sequelize.UUID,
    price: Sequelize.FLOAT,
    stock: Sequelize.INTEGER,
  },
  {
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "products",
    tableName: "products",
  }
);

module.exports = {
  ProductModel,
};
