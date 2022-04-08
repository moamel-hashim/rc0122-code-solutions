const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */
  const token = req.get('x-access-token');
  if (!token) {
    throw new ClientError(401, 'authentication required');
  } else {
    const jwtVerify = jwt.verify(token);
    const payload = jwtVerify.payload;
    req.user = payload;
    next();
  }
}

module.exports = authorizationMiddleware;
