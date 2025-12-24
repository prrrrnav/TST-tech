const pool = require("../../config/db");

exports.getAllProducts = async () => {
  const { rows } = await pool.query(`
    SELECT p.*, pi.image_path
    FROM products p
    LEFT JOIN product_images pi ON p.id = pi.product_id
  `);
  return rows;
};
