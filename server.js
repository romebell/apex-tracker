const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env'});

const app = express();
const port = process.env.PORT || 8000;

// route
app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
  console.log(req.params.platform, req.params.gamertag);
  res.send('Apex Tracker');
})

// look at env variable
app.listen(port, () => {
  console.log(`Apex Legends Tracker: SERVER ON \n - ${process.env.NODE_ENV} mode on port ${port}`);
});