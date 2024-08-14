const router = require('express').Router(); // Import the express router
const categoryRoutes = require('./category-routes'); // Define the path for the category routes
const productRoutes = require('./product-routes'); // Define the path for the product routes
const tagRoutes = require('./tag-routes'); // Define the path for the tag routes

// Create the routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Export the router
module.exports = router;
