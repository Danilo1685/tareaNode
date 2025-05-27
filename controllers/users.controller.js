const fs = require('fs')
const { console } = require('inspector')
const path = require('path')
const filePath = path.join(__dirname, '../db/user.json')


const leerUser = () => {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
}


const escribirUsuarios = (usuarios) => {
    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2))
}


let usuarios = leerUser()


// Obtiene todos los usuarios
const getUsers = (req, res) => {
    res.json({ data: usuarios, status: 200, message: 'Usuarios obtenidos exitosamente' })
}


// Obtiene el usuario a través del ID
const getUserById = (req, res) => {
    const usuario = usuarios.find(item => item.id === parseInt(req.params.id))
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.json({ data: usuario, status: 200, message: 'Usuario encontrado exitosamente' })
}


// Crea un nuevo usuario
const createUser = (req, res) => {
    
    const { nombre, mail, edad } = req.body;

    if (!nombre || !mail || !edad) {        
        return res.status(400).json({ message: 'Faltan datos obligatorios: nombre, mail y edad son requeridos' });
    }

    if (usuarios.find(user => user.mail === mail)) {
        return res.status(400).json({ message: 'El email ya está registrado' });
    }

    const nuevoUsuario = {
        id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
        nombre,
        mail,
        edad
    };

    usuarios.push(nuevoUsuario);
    escribirUsuarios(usuarios);

    res.status(201).json({ nuevoUsuario, message: 'Usuario creado exitosamente' });
};



// Actualiza un usuario
const updateUser = (req, res) => {
    const usuario = usuarios.find(item => item.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    const { nombre, mail, edad } = req.body;

    if (mail && usuarios.find(user => user.mail === mail && user.id !== usuario.id)) {
        return res.status(400).json({ message: 'El email ya está registrado por otro usuario' });
    }

    if (!nombre && !mail && !edad) {
        return res.status(400).json({ message: 'Se requiere al menos un campo (nombre, mail o edad) para actualizar' });
    }

    usuario.nombre = nombre || usuario.nombre;
    usuario.mail = mail || usuario.mail;
    usuario.edad = edad || usuario.edad;
    escribirUsuarios(usuarios);

    res.status(200).json({ data: usuario, message: 'Usuario editado exitosamente' });
};


// Elimina un usuario
const deleteUser = (req, res) => {
    const usuario = usuarios.find(item => item.id === parseInt(req.params.id))
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' })

    usuarios = usuarios.filter(item => item.id !== usuario.id)
    escribirUsuarios(usuarios)

    res.status(200).json({ message: 'Usuario eliminado exitosamente' })
}


// Exporta los métodos
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
