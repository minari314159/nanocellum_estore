const express = require("express");
const productController = require("../controllers/productController");
const { roleAuth } = require("../middleware/userAuth");

const router = express.Router();

//product routes
router.get("/", productController.getAllProducts);

router.get("/:id", productController.getOneProduct);

router.post("/",roleAuth, productController.createProduct);

router.patch("/:id",roleAuth, productController.updateProduct);

router.delete("/:id",roleAuth, productController.deleteProduct);

module.exports = router;
