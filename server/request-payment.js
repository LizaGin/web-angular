const express = require('express');
const router = express.Router();

const {User, Payment, RequestPayment, FilePayment} = require('./model');
const { verifyToken, verifyAdmin } = require('./utils');

router.post('/requestPayment', verifyToken, (req, res) => {
  const paymentRequest = new RequestPayment(req.body);
  paymentRequest.save()
    .then(() => res.status(200).send())
    .catch(err => {
      console.log(err);
      res.status(400).send();
    });
});

router.get('/requestPayment', verifyAdmin, (_, res) => {
  RequestPayment.find({}, (err, paymentRequests) => {
    if (err) return res.status(500).send();
    res.status(200).send(Array.from(paymentRequests));
  })
});

module.exports = router;
