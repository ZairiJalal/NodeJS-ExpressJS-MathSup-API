const express = require('express');
const router = express.Router();

const livreCtrl = require('../controllers/livre');
const auth = require('../middleware/auth'); 


router.get('/', livreCtrl.getAllLivre);
router.get('/:id', livreCtrl.getOneLivre);
router.post('/',auth, livreCtrl.createLivre);
router.put('/:id', auth,livreCtrl.modifyLivre);
router.delete('/:id',auth, livreCtrl.deleteLivre);

module.exports = router;