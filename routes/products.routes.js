const express = require('express')
const router = express.Router()

const { 
        getProducts, 
        getProductById,
        createProduct, 
        updateProduct, 
        deleteProduct 
} = require('../controllers/products.controller')


router.get('/productos', getProducts)

router.get('/productos/:id', getProductById)

router.post('/productos', createProduct)

router.put('/productos/:id', updateProduct)

router.delete('/productos/:id', deleteProduct)

module.exports = router