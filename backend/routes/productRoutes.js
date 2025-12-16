import express from "express";
import {
  createProduct,
  getMyProducts,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
import { approvedSellerOnly } from "../middleware/sellerMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.use(protect, approvedSellerOnly);

router.post("/", upload.array("images", 5), createProduct);
router.get("/mine", getMyProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
