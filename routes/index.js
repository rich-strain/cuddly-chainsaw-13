const router = require('express').Router(); // Import the express router
const apiRoutes = require('./api'); // Define the path for the api routes

router.use('/api', apiRoutes); // Use the api routes

router.use((req, res) => {
  // Route is not /api, so send "Wrong Route!" message
  res.send('<h1>Wrong Route!</h1>');
});

// Export the router
module.exports = router;
