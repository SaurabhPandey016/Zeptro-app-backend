import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  await Cart.create(req.body);
  res.json({ message: "Added to cart" });
};

export const getCart = async (req, res) => {
  res.json(await Cart.find());
};
