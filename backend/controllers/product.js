const Product = require('../models/product.js')
const ProductFilters = require('../utils/productFilters.js')

const productAll = async (req, res) => {
    const productFilter = new ProductFilters(Product.find(), req.query).search().filter()
    const products = await productFilter.query;

    res.status(200).json({
        products
    })
}

const detailProducts = async (req, res) => {
    const product = await Product.findById(req.params.id)

    res.status(200).json({
        product
    })
}

const createdProduct = async (req, res) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        product
    })
}

const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)

    res.status(200).json({
        message: "product was deleted"
    })
}




module.exports = { productAll, detailProducts, createdProduct, deleteProduct }