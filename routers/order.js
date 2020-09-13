const { Router } = require("express");

const router = Router();
const orderController = require("../controllers/order-controller");

router.post("/create", orderController.create);

module.exports = router;
