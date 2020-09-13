const { Router } = require("express");

const router = Router();
const productController = require("../controllers/product-controller");

router.post("/create", productController.create);
router.get("/find-all", productController.findAll);

module.exports = router;
