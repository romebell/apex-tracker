# Apex Legends Tracker

I will give you a walk through on how to build out the project.

## Install Packages & Initial Setup

Before you begin, you will need to gain access to the Tracker API to use for the project. You will need to go to 
<https://tracker.gg/developers> to sign up for an account if you do not have one.

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