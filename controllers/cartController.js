import Cart from "../models/Cart.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  const { productId } = req.body;

  const existing = await Cart.findOne({ productId });

  if (existing) {
    existing.quantity += 1;
    await existing.save();
    return res.json(existing);
  }

  const item = await Cart.create(req.body);
  res.json(item);
   
};

// GET CART
export const getCart = async (req, res) => {
  res.json(await Cart.find());
};

// UPDATE QUANTITY
export const updateQuantity = async (req, res) => {
  const { quantity } = req.body;

  const updated = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity },
    { new: true }
  );

  res.json(updated);
};

// DELETE ITEM
export const deleteFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
};
