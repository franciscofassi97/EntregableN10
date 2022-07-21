const prueba = (req, res) => {
	res.render('loginForm');
}

const loginUser = (req, res) => {
	const { username } = req.body;
	if (username) {
		req.session.username = username;
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
};

const getFormRegistro = (req, res) => {
	res.render('registroForm');
};

const registroUsuarioError = (req, res) => {
	res.render("registroForm", { error: "El usuario ya existe" });
}

module.exports = {
	prueba,
	loginUser,
	logoutUser,
	getFormRegistro,
	registroUsuarioError
};