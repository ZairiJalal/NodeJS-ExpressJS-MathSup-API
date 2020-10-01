const jwt = require('jsonwebtoken');

//------le middleware d'authentification pour sécuriser les routes dans notre API.

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token )
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const adminId = decodedToken.adminId;
    if (req.body.adminId && req.body.adminId !== adminId) {
      throw 'Invalid ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};