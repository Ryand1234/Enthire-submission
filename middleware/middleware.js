const jwt = require('jsonwebtoken')

const userAuthorize = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    res.status(401);
    next();
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err || user.role != 'manual') {
      res.status(401);
    }
    req.user = user;
    next();
  });
};

module.exports = userAuthorize;
