let usuarios = [
    { id: 1, nombre: 'Juan', mail: "juan@juan.com" },
    { id: 2, nombre: 'Pedro', mail: "pedro@pedro.com" },
]


//Obtiene todos los usuarios
const getUsers = (req, res) => {
    res.json({ data: usuarios, status: 200, massage: 'Usuarios obtenidos exitosamente' })
}


//Obtiene el usuario atraves del id
const getUserById = (req, res) => {
    const usuario = usuarios.find(item => item.id === parseInt(req.params.id))
    if (!usuario) return res.json({ status: 404, massage: 'Usuario no encontrado' })
    res.json({ data: usuario, status: 200, massage: 'Usuario encontrado exitosamente' })
}


//Crea un nuevo usuario
const createUser = (req, res) => {
    const nuevoUsuario = req.body
    nuevoUsuario.id = usuarios.length + 1
    usuarios.push(nuevoUsuario)
    res.json({status: 201, nuevoUsuario, massage: 'Usuario creado exitosamente'})
}


//Actualiza un usuario
const updateUser = (req, res) => {
    const usuario = usuarios.find(item => item.id === parseInt(req.params.id))
    if(!usuario) return res.json({status: 404, massage: 'Usuario no encontrado'})
    
    usuario.nombre = nombre || usuario.nombre
    usuario.mail = mail || usuario.mail
    res.json({status: 200, data: usuario, massage: 'Usuario editado exitosamente'})
}


//Elimina un usuario
const deleteUser = (req, res) => {
    const usuario = usuarios.find(item => item.id === parseInt(req.params.id))
    if(!usuario) return res.json({status: 404, massage: 'Usuario no encontrado'})
    
    usuarios = usuarios.filter(item => item.id !== usuario.id)
    res.json({status: 200, massage: 'Usuario eliminado exitosamente'})
}


//Exporta los metodos
module.exports ={
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
