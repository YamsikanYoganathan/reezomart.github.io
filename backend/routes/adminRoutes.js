import express from "express";
import {
  adminLogin,
  getPendingSellers,
  approveSeller
} from "../controllers/adminController.js";
import { adminAuth } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/login", adminAuth, adminLogin);
router.get("/sellers/pending", adminAuth, getPendingSellers);
router.put("/sellers/:sellerId/approve", adminAuth, approveSeller);

export default router;
