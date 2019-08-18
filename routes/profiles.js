const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// route
router.get('/:platform/:gamertag', async (req, res) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    }
    
    const { platform, gamertag } = req.params;

  } catch (err) {
    
  }
});

module.exports = router;