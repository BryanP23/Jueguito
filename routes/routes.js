const router = require('express').Router();
const {
   getAllPreguntas
} = require('../controllers/controller');


router.get('/getAll/:categoria', getAllPreguntas);

module.exports = router;