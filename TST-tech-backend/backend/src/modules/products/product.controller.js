const { getAllProducts } = require("./product.queries");
const imageUrl = require("../../utils/imageUrl");

exports.getProducts = async (req, res) => {
  const rows = await getAllProducts();

  const products = {};
  rows.forEach(r => {
    if (!products[r.id]) {
      products[r.id] = { ...r, images: [] };
    }
    if (r.image_path) {
      products[r.id].images.push(imageUrl(r.image_path));
    }
    delete products[r.id].image_path;
  });

  res.json(Object.values(products));
};
