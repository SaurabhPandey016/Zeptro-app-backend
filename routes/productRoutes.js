import express from "express";
import { getAllProducts, getByCategory, getByCategoryId } from "../controllers/productController.js";
import { seedProducts } from "../controllers/seedController.js";

const router = express.Router();

// router.get("/seed", seedProducts); 
router.get("/", getAllProducts);
router.get("/:category", getByCategory);
router.get("/category/:id", getByCategoryId);

export default router;
