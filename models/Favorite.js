import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  productId: Number,
  title: String,
  price: Number,
  image: String
});

export default mongoose.model("Favorite", favoriteSchema);
