const express = require('express')
const router = express.Router()

const {
        getProducts,
        getProductsById,
        createProducts,
        updateProducts,
        deleteProducts
} = require('../controllers/products.controller')


router.post('/', createProducts);

router.get('/', getProducts);

router.get('/:id', getProductsById);

router.put('/:id', updateProducts);

router.delete('/:id', deleteProducts);
module.exports = router