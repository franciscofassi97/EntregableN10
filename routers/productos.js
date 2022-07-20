const express = require('express');
const router = express.Router();
const { formProductos } = require('../controllers/productosController');
const { getUser } = require('../middleware');


router.get('/', getUser, formProductos);

module.exports = router;