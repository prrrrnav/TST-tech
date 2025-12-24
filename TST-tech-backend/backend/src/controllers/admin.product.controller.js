const db = require("../config/db");

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      primary_category,
      sub_category,
      rating,
      images = [],
      features = []
    } = req.body;

    // 1. Insert product
    const productResult = await db.query(
      `
      INSERT INTO products (name, primary_category, sub_category, rating)
      VALUES ($1, $2, $3, $4)
      RETURNING id
      `,
      [name, primary_category, sub_category, rating]
    );

    const productId = productResult.rows[0].id;

    // 2. Insert images
    for (const image of images) {
      await db.query(
        `INSERT INTO product_images (product_id, image_url)
         VALUES ($1, $2)`,
        [productId, image]
      );
    }

    // 3. Insert features
    for (const feature of features) {
      await db.query(
        `INSERT INTO product_features (product_id, feature)
         VALUES ($1, $2)`,
        [productId, feature]
      );
    }

    res.status(201).json({
      message: "Product created successfully",
      productId
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const {
      name,
      primary_category,
      sub_category,
      rating,
      images = [],
      features = []
    } = req.body;

    // 1. Update product
    await db.query(
      `
      UPDATE products
      SET name = $1,
          primary_category = $2,
          sub_category = $3,
          rating = $4
      WHERE id = $5
      `,
      [name, primary_category, sub_category, rating, productId]
    );

    // 2. Clear old images & features
    await db.query(`DELETE FROM product_images WHERE product_id = $1`, [productId]);
    await db.query(`DELETE FROM product_features WHERE product_id = $1`, [productId]);

    // 3. Insert new images
    for (const image of images) {
      await db.query(
        `INSERT INTO product_images (product_id, image_url)
         VALUES ($1, $2)`,
        [productId, image]
      );
    }

    // 4. Insert new features
    for (const feature of features) {
      await db.query(
        `INSERT INTO product_features (product_id, feature)
         VALUES ($1, $2)`,
        [productId, feature]
      );
    }

    res.json({ message: "Product updated successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await db.query(`DELETE FROM products WHERE id = $1`, [productId]);

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
