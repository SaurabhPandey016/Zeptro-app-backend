import Favorite from "../models/Favorite.js";

export const addFavorite = async (req, res) => {
  await Favorite.create(req.body);
  res.json({ message: "Added to favorites" });
};

export const getFavorites = async (req, res) => {
  res.json(await Favorite.find());
};
