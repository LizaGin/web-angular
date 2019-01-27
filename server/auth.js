const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();


const secretKey = 'secretsecretsecretsecretsecretsecretsecretsecretsecretsecret';

const {User, Payment, requestPayment, FilePayment } = require('./model');

const db = 'mongodb://admin:admin1@ds211865.mlab.com:11865/webdhtml';
mongoose.connect(db, { useNewUrlParser: true });

router.post('/login', (req, res) => {
  const userData = req.body;
  User.findOne({login: userData.login}, (err, user) => {
      if (err) { console.error(err); return res.status(500).send(); }
      if (!user) return res.status(401).send('Invalid email.');
      if (user.password !== userData.password) return res.status(401).send('Invalid password.');

      const payload = { subject: user._id, role: user.role };
      const token = jwt.sign(payload, secretKey);

      res.status(200).header('X-Set-Authorization', token).send({ role: user.role });
  });
});

router.post('/register', (req, res) => {
  const userData = new User(req.body);
  userData.save()
    .then(() => res.status(200).send())
    .catch(err => {
      console.log(err);
      res.status(400).send();
    });
});

module.exports = router;
