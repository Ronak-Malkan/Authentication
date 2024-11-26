const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to add a new user
router.post('/', userController.addUser);

router.get('/get', userController.getUser);

// Route to update an existing user
router.put('/:id', userController.updateUser);

module.exports = router;
