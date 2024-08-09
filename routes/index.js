const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  // Route is not /api, so send "Wrong Route!" message
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
