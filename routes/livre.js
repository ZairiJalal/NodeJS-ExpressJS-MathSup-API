const express = require('express');
const router = express.Router();

const livreCtrl = require('../controllers/livre');
const auth = require('../middleware/auth'); 


router.get('/', livreCtrl.getAllLivre);
router.get('/:id', livreCtrl.getOneLivre);
router.post('/', livreCtrl.createLivre);
router.put('/:id', livreCtrl.modifyLivre);
router.delete('/:id', livreCtrl.deleteLivre);

module.exports = router;