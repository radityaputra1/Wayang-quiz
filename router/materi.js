const materiController = require('../controllers/materi');
const router = require('express').Router();

router.get('/materi', materiController.getAll);

module.exports = router;