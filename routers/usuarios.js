const express = require('express');
const passport = require('passport');
const { prueba, loginUser, logoutUser, getFormRegistro, registroUsuarioError } = require('../controllers/usuariosController');
const router = express.Router();

// router.get('/', prueba)

router.get('/login', prueba);

router.post('/login', passport.authenticate('login'), loginUser);

router.post('/logout', logoutUser);


router.get('/registro', getFormRegistro);
router.post('/registro', passport.authenticate(
    'registro',
    {
        failureRedirect: '/api/usuarios/registro/error',
        failureMessage: true
    }
));

router.get('/registro/error', registroUsuarioError);

module.exports = router;