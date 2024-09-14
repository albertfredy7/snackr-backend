const express = require('express');
const { getMenuItems, addMenuItem } = require('../controllers/menuController');

const router = express.Router();

router.get('/', getMenuItems);   // Get all menu items
router.post('/add', addMenuItem); // Add a new menu item

module.exports = router;
