// routes/contacts.js
const express = require('express');
const router = express.Router();
const contactsController = require('../controller/contacts');

// GET all contacts
// localhost:8080/contacts
router.get('/', contactsController.getAll);

// GET a single contact by ID
router.get('/:id', contactsController.getSingle);

module.exports = router;
