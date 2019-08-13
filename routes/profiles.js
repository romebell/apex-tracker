const express = require('express');
const router = express.Router();

// route
router.get('/:platform/:gamertag', (req, res) => {
  console.log(req.params.platform, req.params.gamertag);
  res.send('Apex Tracker');
});

module.exports = router;