const getUser = (req, res, next) => {
    if (req.session.nombreUsuario) {
        next();
    } else {
        res.redirect("/api/usuarios/login");
    }
};

module.exports = { getUser };