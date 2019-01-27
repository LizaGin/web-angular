const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  login: {
    type: String,
    index: { unique: true }
  },
  password: String,
  role: {
    type: String,
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);

const paymentSchema = new Schema({
  number: String,
  date: String,
  cvc: String,
  sum: Number,
  comment: {
    type: String,
    default: ''
  },
  email: String,
  secure: {
    type: Boolean,
    default: true
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

const paymentRequestSchema = new Schema({
  inn: Number,
  bik: Number,
  account: Number,
  nds: ['НДС 18%', 'НДС 10%', 'без НДС'],
  sum: Number,
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  }
})

const RequestPayment = mongoose.model('PaymentRequest', paymentRequestSchema);

const filePaymentShema = new Schema({
  who : String,
  bik : Number,
  account : Number,
  sum : Number,
  nds : ['НДС 18%', 'НДС 10%', 'без НДС']
})

const FilePayment = mongoose.model('FilePayment', filePaymentShema);

module.exports = {User, Payment, RequestPayment, FilePayment};
