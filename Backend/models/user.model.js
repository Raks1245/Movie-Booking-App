const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: Number,
  email: String,
  first_name: String,
  last_name: String,
  // ... Other fields ...
  coupens: [{ id: Number, discountValue: Number }],
  bookingRequests: [{
    reference_number: Number,
    coupon_code: Number,
    show_id: Number,
    tickets: [Number]
  }]
});

module.exports = mongoose.model('User', userSchema);