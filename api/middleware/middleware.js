const User = require('../users/users-model');


function logger(req, res, next) {
  
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl
  console.log(`[${timestamp}] ${method} to ${url}`);
  next()
  // DO YOUR MAGIC
}

async function validateUserId(req, res, next) {
  try {
    const user = await User.getById(req.params.id);
    if (!user) {
    res.status(404).json({
      message: 'user not found',
    })
    } else {
      req.user = user;
      next()
    }
  } catch(err) {
     res.status(500).json({
       message: "Problem finding user",
     });

  }
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
