const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// Create a new admin
router.post('/admins', adminController.createAdmin);

// Get all admins
router.get('/admins', adminController.getAllAdmins);

// Get admin by ID
router.get('/admins/:id', adminController.getAdminById);

// Update admin by ID
router.put('/admins/:id', adminController.updateAdminById);

// Delete admin by ID
router.delete('/admins/:id', adminController.deleteAdminById);

module.exports = router;
