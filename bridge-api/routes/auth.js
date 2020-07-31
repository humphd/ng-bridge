const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const users = require('../users');

router.post('/register', async (req, res) => {
  const { username, fullname, password } = req.body;
  if(!(username && fullname && password)) {
    return res.status(400).json({
      message: 'missing required user information'
    });
  }

  try {
    await users.register(username, fullname, password);
    res.status(201).json({
      message: `created user ${username}`
    });
  } catch(err) {
    res.status(400).json({
      message: `unable to create ${username}`,
      error: err.message
    });
  }
});

/**
 * Generate a new JSON Web Token (JWT) for the user with `username`
 * @param {String} username - the user's username
 */
function createToken(username) {
  const { fullname } = users.byUsername(username);

  // The "claims" data that lives in the payload of the token
  const payload = {
    // sub is the subject of these claims https://tools.ietf.org/html/rfc7519#section-4.1.2
    sub: username,
    name: fullname
  };
  // Secret used to sign the key.  We store it in the .env, not the code.
  const secret = process.env.JWT_SECRET;
  // Options for JWT
  const options = { expiresIn: process.env.JWT_EXPIRES_IN || '3d'};

  return jwt.sign(payload, secret, options);
}


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if(!(username && password)) {
    return res.status(400).json({
      message: 'missing required login information'
    });
  }

  try {
    const isValid = await users.check(username, password);
    if(!isValid) {
      return res.status(401).json({ message: 'login failed' });
    }

    res.json({
      message: 'login successful',
      // Return a JSON Web Token this authenticated user can use
      token: createToken(username)
    });
  } catch(err) {
    res.status(400).json({
      message: `unable to authenticate ${username}`,
      error: err.message
    });
  }
});

module.exports = router;
