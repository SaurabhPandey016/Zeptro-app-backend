import express from "express";
import { addFavorite, getFavorites } from "../controllers/favoriteController.js";

const router = express.Router();
router.post("/", addFavorite);
router.get("/", getFavorites);

export default router;
