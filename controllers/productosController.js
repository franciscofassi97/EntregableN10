const formProductos = (req, res) => {
    const nombreUsuario = req.session.nombreUsuario;
    console.log(nombreUsuario);
    res.render('formProducts', { nombreUsuario });
}

module.exports = { formProductos };