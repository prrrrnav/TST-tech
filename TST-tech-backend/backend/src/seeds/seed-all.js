require("dotenv").config();
const pool = require("../config/db");

const categories = require("./data/categories");
const productTypes = require("./data/productTypes");
const products = require("./data/products");

(async () => {
  try {
    /* =========================
       INSERT CATEGORIES
    ========================= */
    for (const c of categories) {
      await pool.query(
        `INSERT INTO categories (id, name, description, icon)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (id) DO NOTHING`,
        [c.id, c.name, c.description, c.icon]
      );
    }

    /* =========================
       INSERT PRODUCT TYPES
    ========================= */
    for (const pt of productTypes) {
      await pool.query(
        `INSERT INTO product_types (id, category_id, name, description)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (id) DO NOTHING`,
        [pt.id, pt.categoryId, pt.name, pt.description || null]
      );
    }

    /* =========================
       INSERT PRODUCTS + CHILD DATA
    ========================= */
    for (const p of products) {
      // products table
      await pool.query(
        `INSERT INTO products
          (id, name, short_name, category_id, product_type_id,
           price, original_price, discount,
           rating, reviews, featured, in_stock, description)
         VALUES
          ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
         ON CONFLICT (id) DO NOTHING`,
        [
          p.id,
          p.name,
          p.shortName || null,
          p.categoryId,
          p.productTypeId,
          p.price ?? null,
          p.originalPrice ?? null,
          p.discount ?? null,
          p.rating ?? null,
          p.reviews ?? null,
          p.featured ?? false,
          p.inStock !== false,
          p.description || null
        ]
      );

      /* ---------- images ---------- */
      for (const img of p.images || []) {
        await pool.query(
          `INSERT INTO product_images (product_id, image_path)
           VALUES ($1, $2)
           ON CONFLICT DO NOTHING`,
          [p.id, img]
        );
      }

      /* ---------- features ---------- */
      for (const feature of p.features || []) {
        await pool.query(
          `INSERT INTO product_features (product_id, feature)
           VALUES ($1, $2)
           ON CONFLICT DO NOTHING`,
          [p.id, feature]
        );
      }

      /* ---------- specifications ---------- */
      if (p.specifications) {
        for (const [label, value] of Object.entries(p.specifications)) {
          await pool.query(
            `INSERT INTO product_specifications (product_id, label, value)
             VALUES ($1, $2, $3)
             ON CONFLICT DO NOTHING`,
            [p.id, label, value]
          );
        }
      }
    }

    console.log("✅ ALL DATA SEEDED SUCCESSFULLY");
    process.exit(0);
  } catch (err) {
    console.error("❌ SEED FAILED:", err);
    process.exit(1);
  }
})();
