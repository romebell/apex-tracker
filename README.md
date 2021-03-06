# Apex Legends Tracker

Apex Legends Tracker was web app built to access and show data from tracker API. The is a full stack application built using Express, Vue.js, and Tracker Network API.

Here is the link to the [Live Site](https://apex-legend-tracker-1.herokuapp.com).

I will give you a walk through on how to build out the project.

## Install Packages & Initial Setup

Before you begin, you will need to gain access to the Tracker API to use for the project. You will need to go to 
<https://tracker.gg/developers> to sign up for an account if you do not have one.

Here is the link to check for the current [Apex Leaderboard](https://dreamteam.gg/apex/leaderboards) 

We first need to set up NPM. We do the following command and configure package.json. After set up `package.json` file, you will need to install the following packages: `express` `morgan` `dotenv` `node-fetch` `concurrently`

`$ npm init`

`$ npm install express morgan dotenv node-fetch concurrently`

From there we to install nodemon on the development environment.

`$ npm i -D nodemon`

Next, we will add scripts to `package.json`; one script to start the server, and the other script to run nodemon.

`"start": "node server"`

`"server": "nodemon server"`

Your `package.json` file should look like the following:

```
  "name": "apex-tracker",
  "version": "1.0.0",
  "description": "Track stats for Apex Legends",
  "main": "server.js",
  "scripts": {
    "start": "node server",
    "server": "nodemon server"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/romebell/apex-tracker.git"
  },
  "author": "Rome Bell",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/romebell/apex-tracker/issues"
  },
  "homepage": "https://github.com/romebell/apex-tracker#readme",
  "dependencies": {
    "concurrently": "^4.1.1",
    "dotenv": "^8.0.0",
    "express": "^4.17.1",
    "morgan": "^1.9.1",
    "node-fetch": "^2.6.0"
  },
  "devDependencies": {
    "nodemon": "^1.19.1"
  }
}
```

Next, you need to add a file to ignore files that are too large that have on github. These files can always be redownloaded by open main directory in the terminal and type in the command line: 

`$ npm install`

Using the terminal and inside main directory, you want to make a gitnore file `.gitignore`. Then open `.gitignore` and for now, we are going to ignore `node_modules/` (don't forget the `/` after "modules").

# Set Up Server, Turn Server On

Add a file called `server.js` and open. Next require the following frameworks inside the file. The three that will be setting up are `express` `morgan` `dotenv`
It should look like the following:

```
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
```

From here we will need to turn on the server. We turn on the server by invoking expess. Then we find a port to listen on. We are going to start out listen on `port 5000`

```
const app = express();

app.listen(5000, () => 
  console.log('Server Running'))
});
```

At this point you have the following inside of your `server.js` file.

```
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

app.listen(5000, () => 
  console.log('Server Running'))
});
```

Once that is save, we want to start the server. In your terminal you want to do

`$ npm run server`

From here it will print "Server Running".

The next thing that we are going to do put everything inside a environment variables and ports. We can also add API keys here as well. Therefore, we want to add file called `config.env` to the main directory.

Inside of `config.env` we want to add the the following: 

```
PORT=5000
NODE_ENV=development
TRACKER_API_URL=https://public-api/tracker.gg/v2/apex/standard
TRACKER_API_URL=XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX (Your API key here)
```

Remember: In order for any updates to take effect inside of `config.env` you have to restart the server.

Now inside of `server.js` we want to add a path to the config to access the environment variables from anywhere in the application

```
dotenv.config({ path: './config.env});

const port = process.env.PORT || 8000;

```

We now need to update the rest of the `server.js` by adding the port variable to listen on the app. Your `server.js` file should now look like the following:

```
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env'});

const port = process.env.PORT || 8000;
const app = express();

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
```

Now, we want to create our first and only route for this application. We add the following to `server.js`

```
app.get('/api/v1/profile/:plateform/:gamertag', (req, res) => {
  res.send('Apex Tracker');
});
```

Since we now have the server running, we now want to set up a folder called `routes` and we are going to put all of our route functionality there. Our folder `routes` will sit in the main directory.

More documentation coming soon ...