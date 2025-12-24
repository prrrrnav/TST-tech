-- ===============================
-- PRODUCTS : ENTRANCE CONTROL > FINGER PRINT
-- ===============================

INSERT INTO products (id, name, primary_category, sub_category, rating)
VALUES
(1, 'Standalone Slim', 'Entrance Control', 'FINGER PRINT', 4.6),
(2, 'Access Mini', 'Entrance Control', 'FINGER PRINT', 4.5),
(3, 'inBio K40', 'Entrance Control', 'FINGER PRINT', 4.8),
(4, 'Standalone ZCloak', 'Entrance Control', 'FINGER PRINT', 4.7),
(5, 'Private Combo', 'Entrance Control', 'FINGER PRINT', 4.7),
(6, 'Access Pro', 'Entrance Control', 'FINGER PRINT', 4.7),
(7, 'inBio Multi-Modal', 'Entrance Control', 'FINGER PRINT', 4.7),
(8, 'Standalone Plus', 'Entrance Control', 'FINGER PRINT', 4.7),
(9, 'inBio Office', 'Entrance Control', 'FINGER PRINT', 4.7),
(10, 'inBio VCID', 'Entrance Control', 'FINGER PRINT', 4.8),
(11, 'inBio Indoor Station', 'Entrance Control', 'FINGER PRINT', 4.8),
(12, 'inBio Ultra', 'Entrance Control', 'FINGER PRINT', 4.7),
(13, 'inBio Ultra Pro', 'Entrance Control', 'FINGER PRINT', 4.7),
(14, 'Conquest Access', 'Entrance Control', 'FINGER PRINT', 4.7);

-- ===============================
-- PRODUCT IMAGES (PLACEHOLDERS)
-- ===============================

INSERT INTO product_images (product_id, image_url)
VALUES
(1, 'https://via.placeholder.com/300x400?text=Standalone+Slim'),
(2, 'https://via.placeholder.com/300x400?text=Access+Mini'),
(3, 'https://via.placeholder.com/300x400?text=inBio+K40'),
(4, 'https://via.placeholder.com/300x400?text=Standalone+ZCloak'),
(5, 'https://via.placeholder.com/300x400?text=Private+Combo'),
(6, 'https://via.placeholder.com/300x400?text=Access+Pro'),
(7, 'https://via.placeholder.com/300x400?text=inBio+Multi+Modal'),
(8, 'https://via.placeholder.com/300x400?text=Standalone+Plus'),
(9, 'https://via.placeholder.com/300x400?text=inBio+Office'),
(10, 'https://via.placeholder.com/300x400?text=inBio+VCID'),
(11, 'https://via.placeholder.com/300x400?text=inBio+Indoor+Station'),
(12, 'https://via.placeholder.com/300x400?text=inBio+Ultra'),
(13, 'https://via.placeholder.com/300x400?text=inBio+Ultra+Pro'),
(14, 'https://via.placeholder.com/300x400?text=Conquest+Access');

-- ===============================
-- PRODUCT FEATURES / TAGS
-- ===============================

INSERT INTO product_features (product_id, feature)
VALUES
(1, 'Pro'),
(2, 'Enterprise'),
(3, 'Premium'),
(4, 'Pro'),
(5, 'Enterprise'),
(6, 'Pro Series'),
(7, 'Popular'),
(8, 'Enterprise'),
(9, 'WiFi'),
(10, 'Pro'),
(11, 'Premium'),
(12, 'Pro'),
(13, 'WiFi'),
(14, 'Enterprise');
