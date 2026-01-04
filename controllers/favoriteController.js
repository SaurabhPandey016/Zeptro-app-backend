export const addFavorite = async (req, res) => {
  const exists = await Favorite.findOne({ productId: req.body.productId });
  if (exists) return res.json(exists);
  res.json(await Favorite.create(req.body));
};

export const getFavorites = async (req, res) => {
  res.json(await Favorite.find());
};

export const deleteFavorite = async (req, res) => {
  await Favorite.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
};
