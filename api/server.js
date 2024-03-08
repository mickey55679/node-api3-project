const express = require('express');
const {logger, validatePost,validateUser,validateUserId} = require('./middleware/middleware')

const server = express();
server.use(logger)


server.use(express.json()); 
// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
