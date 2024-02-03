const express = require('express')

const { productAll, detailProducts, createdProduct, deleteProduct } = require('../controllers/product.js')

const router = express.Router()


router.get('/products', productAll);
router.get('/product/:id', detailProducts);
router.post('/products', createdProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router