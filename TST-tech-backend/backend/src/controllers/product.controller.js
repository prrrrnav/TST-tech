const db = require("../config/db");

exports.getProducts = async (req, res) => {
  try {
    const {
      category,
      subCategory,
      features,
      page = 1,
      pageSize = 12,
      sort
    } = req.query;

    const limit = parseInt(pageSize);
    const offset = (parseInt(page) - 1) * limit;

    let values = [];
    let where = [];
    let joins = "";
    let i = 1;

    if (category) {
      where.push(`p.primary_category = $${i++}`);
      values.push(category);
    }

    if (subCategory) {
      where.push(`p.sub_category = $${i++}`);
      values.push(subCategory);
    }

    if (features) {
      joins += `
        JOIN product_features pf
        ON pf.product_id = p.id
        AND pf.feature = ANY($${i++})
      `;
      values.push([].concat(features));
    }

    // Sorting
    let orderBy = "p.id DESC";
    if (sort === "rating_desc") orderBy = "p.rating DESC";
    if (sort === "rating_asc") orderBy = "p.rating ASC";
    if (sort === "name_asc") orderBy = "p.name ASC";
    if (sort === "name_desc") orderBy = "p.name DESC";

    // Total count (for frontend pagination)
    const countQuery = `
      SELECT COUNT(DISTINCT p.id) AS total
      FROM products p
      ${joins}
      ${where.length ? "WHERE " + where.join(" AND ") : ""}
    `;

    const countResult = await db.query(countQuery, values);
    const total = parseInt(countResult.rows[0].total);

    // Main query
    const query = `
      SELECT DISTINCT
        p.id,
        p.name,
        p.rating,
        (SELECT image_url FROM product_images
         WHERE product_id = p.id LIMIT 1) AS image
      FROM products p
      ${joins}
      ${where.length ? "WHERE " + where.join(" AND ") : ""}
      ORDER BY ${orderBy}
      LIMIT $${i++} OFFSET $${i++}
    `;

    values.push(limit, offset);

    const result = await db.query(query, values);

    res.json({
      page: parseInt(page),
      pageSize: limit,
      total,
      totalPages: Math.ceil(total / limit),
      products: result.rows
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET PRODUCT DETAILS BY ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    // 1. Get product basic info
    const productResult = await db.query(
      `
      SELECT id, name, primary_category, sub_category, rating
      FROM products
      WHERE id = $1
      `,
      [productId]
    );

    if (productResult.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = productResult.rows[0];

    // 2. Get images
    const imagesResult = await db.query(
      `
      SELECT image_url
      FROM product_images
      WHERE product_id = $1
      `,
      [productId]
    );

    // 3. Get features / tags
    const featuresResult = await db.query(
      `
      SELECT feature
      FROM product_features
      WHERE product_id = $1
      `,
      [productId]
    );

    // 4. Final response
    res.json({
      ...product,
      images: imagesResult.rows.map(i => i.image_url),
      features: featuresResult.rows.map(f => f.feature)
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

