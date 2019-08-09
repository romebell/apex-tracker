const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env'});

const app = express();
const port = process.env.PORT || 8000;

// Profile routes
app.use('/api/v1/profile', require('./routes/profiles'));

// look at env variable
app.listen(port, () => {
  console.log(`Apex Legends Tracker: SERVER ON \n - ${process.env.NODE_ENV} mode on port ${port}`);
});