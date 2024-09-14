const Order = require('../models/Order');

// Place a new order
exports.placeOrder = async (req, res) => {
  const { studentId, items, totalPrice } = req.body;
  try {
    const newOrder = new Order({ studentId, items, totalPrice });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status', error });
  }
};
