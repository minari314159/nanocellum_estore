const express = require("express");
const productController = require("../controllers/productController");
const { verifyRole } = require("../middleware/userAuth");

const router = express.Router();

//product routes  n
router.get("/", productController.getAllProducts);

router.get("/:id", productController.getOneProduct);

router.post("/", verifyRole, productController.createProduct);

router.put("/:id", verifyRole, productController.updateProduct);

router.delete("/:id", verifyRole, productController.deleteProduct);

module.exports = router;
