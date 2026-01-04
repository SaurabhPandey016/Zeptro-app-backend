import express from "express";
import {
  addToCart,
  getCart,
  updateQuantity,
  deleteFromCart
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/", addToCart);              // Add to cart
router.get("/", getCart);                 // Get cart
router.put("/:id", updateQuantity);       // + / -
router.delete("/:id", deleteFromCart);    // Remove item

export default router;