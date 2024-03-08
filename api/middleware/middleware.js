function logger(req, res, next) {
  
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl
  console.log(`[${timestamp}] ${method} to ${url}`);
  next()
  // DO YOUR MAGIC
}

function validateUserId(req, res, next) {
  console.log("logger middleware");

  next();
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  console.log("logger middleware");

  next();
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  console.log("logger middleware");

  next();
  // DO YOUR MAGIC
}

module.exports = {
  logger,
  validateUser,
  validateUserId,
  validatePost,


}

// do not forget to expose these functions to other modules
