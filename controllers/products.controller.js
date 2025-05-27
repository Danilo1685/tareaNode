const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../db/productos.json')


const leerProductos = () => {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
}


const escribirProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2))
}


let productos = leerProductos()



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
    escribirProductos(productos)
    res.json({status: 201, data: nuevoProducto, massage: 'Producto creado exitosamente'})
}


//Actualiza un producto
const updateProducts = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id));
    if (!producto) return res.json({ status: 404, massage: 'Producto no encontrado' });

    const { nombre, precio } = req.body;

    producto.nombre = nombre || producto.nombre;
    producto.precio = precio || producto.precio;

    escribirProductos(productos);

    res.json({ status: 200, data: producto, massage: 'Producto editado exitosamente' });
};



//Elimina un producto
const deleteProducts = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json({status: 404, massage: 'Producto no encontrado'})

    productos = productos.filter(item => item.id !== producto.id)
    
    escribirProductos(productos)
    
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