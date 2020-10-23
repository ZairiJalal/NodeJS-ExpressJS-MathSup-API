const express = require('express');
const router = express.Router();

const formationCtrl = require('../controllers/formation');
const auth = require('../middleware/auth');

router.get('/',  formationCtrl.getAllFormation);
router.get('/:id',formationCtrl.getOneFormation);
router.post('/',  formationCtrl.createFormation);
router.put('/:id',  formationCtrl.modifyFormation);
router.delete('/:id',  formationCtrl.deleteFormation);

module.exports = router;