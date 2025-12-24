-- ================================
-- PRODUCTS TABLE
-- ================================
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,

  primary_category VARCHAR(100) NOT NULL,
  sub_category VARCHAR(100) NOT NULL,

  price NUMERIC(10,2),
  description TEXT,
  stock INT DEFAULT 0,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for fast filtering
CREATE INDEX idx_products_primary_category
ON products(primary_category);

CREATE INDEX idx_products_sub_category
ON products(sub_category);

-- ================================
-- PRODUCT IMAGES TABLE
-- ================================
CREATE TABLE IF NOT EXISTS product_images (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,

  image_url TEXT NOT NULL,

  CONSTRAINT fk_product_images
    FOREIGN KEY (product_id)
    REFERENCES products(id)
    ON DELETE CASCADE
);

CREATE INDEX idx_product_images_product_id
ON product_images(product_id);

-- ================================
-- PRODUCT FEATURES TABLE
-- ================================
CREATE TABLE IF NOT EXISTS product_features (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,

  feature VARCHAR(100) NOT NULL,

  CONSTRAINT fk_product_features
    FOREIGN KEY (product_id)
    REFERENCES products(id)
    ON DELETE CASCADE
);

CREATE INDEX idx_product_features_product_id
ON product_features(product_id);

CREATE INDEX idx_product_features_feature
ON product_features(feature);
