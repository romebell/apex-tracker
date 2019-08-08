# Apex Legends Tracker

I will give you a walk through on how to build out the project.

## Install Packages & Initial Setup

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