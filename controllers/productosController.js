const formProductos = (req, res) => {
	const nombreUsuario = req.session.nombreUsuario;
	res.render('formProducts', { nombreUsuario });
}

module.exports = { formProductos };