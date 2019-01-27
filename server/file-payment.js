const express = require('express');
const router = express.Router();

const {User, Payment, RequestPayment, FilePayment} = require('./model');

const { verifyToken, verifyAdmin } = require('./utils');

router.post('/filePayment', verifyToken, (req, res) => {
  const result = `ИНН получателя: ${req.body.inn} БИК: ${req.body.bik} Номер счета: ${req.body.account
  } НДС: ${req.body.nds} Сколько: ${req.body.sum}`
  res.status(200).send(result);
});


module.exports = router;
