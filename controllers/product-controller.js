require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel, ProductModel } = require("../db/models");

exports.create = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { name, description, price, stock } = req.body;

    if (!authorization) {
      const error = new Error("Authorization required");
      error.statusCode = 401;
      throw error;
    }

    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decodedToken.sub;

    const user = await UserModel.findOne({
      where: {
        id: user_id,
      },
    });
    if (!user) {
      const error = new Error("User with this token not found");
      error.statusCode = 401;
      throw error;
    }

    const product = await ProductModel.create({
      name,
      description,
      price,
      stock,
      user_id: user.id,
    });

    return res.status(200).json({
      message: "Success create product",
      data: product,
    });
  } catch (error) {
    return next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const products = await ProductModel.findAll();
    return res.status(200).json({
      message: "Success get products",
      data: products,
    });
  } catch (error) {
    return next(error);
  }
};
