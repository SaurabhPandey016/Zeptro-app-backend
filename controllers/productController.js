import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getByCategory = async (req, res) => {
  const products = await Product.find({
    "category.slug": req.params.category
  });
  res.json(products);
};

export const getByCategoryId = async (req, res) => {
  const products = await Product.find({
    "category.id": Number(req.params.id)
  });
  res.json(products);
};
