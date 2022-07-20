const express = require('express');
const router = express.Router();
const { formProductos } = require('../controllers/productosController')

router.get('/', formProductos);

module.exports = router;