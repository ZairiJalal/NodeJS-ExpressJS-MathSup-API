const express = require('express');
const router = express.Router();

const formationCtrl = require('../controllers/formation');
const auth = require('../middleware/auth');

router.get('/',  formationCtrl.getAllFormation);
router.get('/:id',formationCtrl.getOneFormation);
router.post('/',auth,  formationCtrl.createFormation);
router.put('/:id', auth, formationCtrl.modifyFormation);
router.delete('/:id', auth, formationCtrl.deleteFormation);

module.exports = router;