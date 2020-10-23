const express = require('express');
const router = express.Router();

const anneeCtrl = require('../controllers/annee');


router.get('/', anneeCtrl.getAllAnnee);
router.get('/:id', anneeCtrl.getOneAnnee);
router.post('/', anneeCtrl.createAnnee);
// router.put('/:id', anneeCtrl.modifyAnnee);
// router.delete('/:id', anneeCtrl.deleteAnnee);

module.exports = router;