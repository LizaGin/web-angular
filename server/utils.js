const jwt = require('jsonwebtoken');
const secretKey = 'secretsecretsecretsecretsecretsecretsecretsecretsecretsecret';

function verifyToken(req, res, next) {
  const token = req.get('x-authorization');
  try {
    jwt.verify(token, secretKey);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send();
  }
}

function verifyAdmin(req, res, next) {
  const token = req.get('x-authorization');
  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.role !== 'admin') return res.status(401).send();
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send();
  }
}

module.exports = { verifyToken, verifyAdmin };
