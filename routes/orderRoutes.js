const express = require('express');
const { placeOrder, updateOrderStatus } = require('../controllers/orderController');

const router = express.Router();

router.post('/place', placeOrder);       // Place a new order
router.put('/update', updateOrderStatus); // Update order status

module.exports = router;
