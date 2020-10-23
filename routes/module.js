const express = require('express');
const router = express.Router();

const moduleCtrl = require('../controllers/module');


router.get('/', moduleCtrl.getAllModule);
router.get('/:id', moduleCtrl.getOneModule);
router.post('/', moduleCtrl.createModule);
// router.put('/:id', moduleCtrl.modifyModule);
// router.delete('/:id', moduleCtrl.deleteModule);

module.exports = router;