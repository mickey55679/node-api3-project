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

async function validateUser(req, res, next) {
   try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      res.status(400).json({
        message: "missing required name field",
      });
    } else {
      req.name = name.trim()
      next();
    }
  } catch (error) {
    // Handle any errors that occur within the try block
    console.error("Error in validatePost:", error);
    res.status(400).json({
      message: "missing required name field",
    });
  }
  // DO YOUR MAGIC
}



async function validatePost(req, res, next) {
  try {
    const { name } = req.body;
    if(!name) {
      res.status(400).json({
        message: "missing required test field"
      })
    } else {
      // req.name = name.trim()
      next()
    }

  } catch(err) {
    res.status(500).json({
      message: "issue validating post"
    })

  }
}


module.exports = {
  logger,
  validateUser,
  validateUserId,
  validatePost,


}

// do not forget to expose these functions to other modules
