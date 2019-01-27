const express = require('express');
const router = express.Router();

const { verifyToken, verifyAdmin } = require('./utils');

const {User, Payment, requestPayment, FilePayment} = require('./model');

router.post('/cardPayment', verifyToken, (req, res) => {
  const paymentInfo = new Payment(req.body);
  paymentInfo.save()
    .then(() => res.status(200).send())
    .catch(err => {
      console.log(err);
      res.status(400).send();
    });
});

router.get('/cardPayment', verifyAdmin, (_, res) => {
  Payment.find({}, (err, payments) => {
    if (err) return res.status(500).send();
    res.status(200).send(Array.from(payments));
  })
});

router.patch('/cardPayment/:_id', verifyAdmin, (req, res) => {
  Payment.findByIdAndUpdate(req.params._id, { 'secure': !req.body.secure }, (err, _) => {
    if (err) return res.status(500).send();
    return res.status(200).send();
  })
});

module.exports = router;
