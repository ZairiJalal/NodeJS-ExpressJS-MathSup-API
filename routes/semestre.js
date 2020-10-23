const express = require('express');
const router = express.Router();

const semestreCtrl = require('../controllers/semestre');


router.get('/', semestreCtrl.getAllSemestre);
router.get('/:id', semestreCtrl.getOneSemestre);
router.post('/', semestreCtrl.createSemestre);
// router.put('/:id', semestreCtrl.modifySemestre);
// router.delete('/:id', semestreCtrl.deleteSemestre);

module.exports = router;