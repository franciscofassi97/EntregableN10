const express = require('express');
const { prueba, loginUser, logoutUser } = require('../controllers/usuariosController');
const router = express.Router();

// router.get('/', prueba)

router.get('/login', prueba)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

module.exports = router;