const express = require('express');
const {
  validateUserId,
  validateUser,
  validatePost,
} = require('../middleware/middleware')
const Post = require('../posts/posts-model');
const User = require('./users-model');

const router = express.Router();

router.get('/', async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
try {
  const users = await User.get();
  res.status(200).json(users);

} catch(error) {
  console.error("Error retrieving users:", error)
  res.status(500).json({message: "Internal service error"})
}



});

router.get('/:id', validateUserId, (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user)
  res.json(req.user)
});

router.post('/', validateUser, (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  console.log(req.name)
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
  console.log(req.name);
});

router.delete('/:id', validateUserId,  (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user);
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  console.log(req.user);
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
  console.log(req.text)
});


router.use((err, req, res, next) => { //eslint-disable-line
res.status(err.status || 500).json({
  customMessage: 'something tragic inside posts route happend',
  message: err.message,
  stack: err.stack,
})
})


module.exports = router;
