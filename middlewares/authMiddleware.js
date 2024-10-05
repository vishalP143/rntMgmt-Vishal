const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

  if (!token) {
    return res.sendStatus(401); // No token, unauthorized
  }

  jwt.verify(token, 'your_jwt_secret', (err, user) => { // Verify token
    if (err) {
      return res.sendStatus(403); // Token invalid, forbidden
    }

    req.user = user; // Save user information to request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateJWT;
