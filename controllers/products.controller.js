let productos = [
    {id: 1, nombre: 'Monitor', precio: 40000},
    {id: 2, nombre: 'Gabinete', precio: 5000},
]


//Obtiene todos los productos
const getProducts = (req, res) => {
    res.json({data: productos, status: 200, massage: 'Productos obtenidos exitosamente'})
}


//Obtiene el producto atraves del id
const getProductsById = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json({status: 404, massage: 'Producto no encontrado'})
        res.json({data: producto, status: 200, massage: 'Producto encontrado exitosamente'})
}


//Crea un nuevo producto
const createProducts = (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)
    res.json({status: 201, data: nuevoProducto, massage: 'Producto creado exitosamente'})
}


//Actualiza un producto
const updateProducts = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json({status: 404, massage: 'Producto no encontrado'})

    producto.nombre = nombre || producto.nombre
    producto.precio = precio || producto.precio
    res.json({status: 200, data: producto, massage: 'Producto editado exitosamente'})
}


//Elimina un producto
const deleteProducts = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json({status: 404, massage: 'Producto no encontrado'})

    productos = productos.filter(item => item.id !== producto.id)
    res.json({status: 200, data: producto, massage: 'Producto eliminado exitosamente'})
}


//Exporta los metodos
module.exports = {
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts
}