require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8000;

const authRouter = require("./routers/auth");
const productRouter = require("./routers/product");
const transactionRouter = require("./routers/transaction");
const orderRouter = require("./routers/order");

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/order", orderRouter);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  return res.status(status).json({
    message: status !== 500 ? error.message : "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Success running server on port ${PORT}`);
});
