const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/admin');

router.post('/login', adminCtrl.login);

module.exports = router;