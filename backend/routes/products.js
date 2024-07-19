const express = require("express");
const productController = require("../controllers/productController");
const { verifyRole } = require("../middleware/userAuth");

const router = express.Router();

//product routes
router.get("/", productController.getAllProducts);

router.get("/:id", productController.getOneProduct);

router.post("/", verifyRole, productController.createProduct);

router.patch("/:id", verifyRole, productController.updateProduct);

router.delete("/:id", verifyRole, productController.deleteProduct);

module.exports = router;
