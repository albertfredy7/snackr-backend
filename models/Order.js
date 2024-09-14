const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ name: String, quantity: Number }],
  status: { type: String, enum: ['pending', 'accepted', 'ready'], default: 'pending' },
  totalPrice: Number,
  orderTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
