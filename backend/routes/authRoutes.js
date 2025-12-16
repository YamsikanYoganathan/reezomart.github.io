import express from "express";
import {
  registerCustomer,
  loginCustomer,
  registerSeller,
  loginSeller
} from "../controllers/authController.js";

const router = express.Router();

// Customer auth
router.post("/customer/register", registerCustomer);
router.post("/customer/login", loginCustomer);

// Seller auth
router.post("/seller/register", registerSeller);
router.post("/seller/login", loginSeller);

export default router;
