var express = require('express');
var router = express.Router();
var skillList = require('../controllers/skills');
const skill = require('../models/skill');

router.get('/', skillList.index);
router.get('/:id', skillList.show);
router.post('/', skillList.create);
router.delete('/:id', skillList.delete);

module.exports = router;
