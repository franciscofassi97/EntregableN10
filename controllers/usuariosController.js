const prueba = (req, res) => {
    res.render('loginForm');
}

const loginUser = (req, res) => {
    const { nombreUsuario } = req.body;
    if (nombreUsuario) {
        req.session.nombreUsuario = nombreUsuario;
        res.redirect("/api/productos");
    } else {
        res.redirect("/api/usuarios/login");
    }
}

const logoutUser = (req, res) => {
    const nombreUsuario = req.session.nombreUsuario;
    req.session.destroy(err => {
        if (err) {
            console.log(err)
        } else {
            res.render('adios', { nombreUsuario })
            res.set({ 'Refresh': '3; url=/api/productos' });
        }
    });
}

module.exports = { prueba, loginUser, logoutUser };