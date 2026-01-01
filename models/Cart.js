import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: Number,
  title: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 }
});

export default mongoose.model("Cart", cartSchema);
