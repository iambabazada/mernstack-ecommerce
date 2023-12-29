const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 1
    },
    category: {
        type: String,
        required: true
    },
    // images: [
    //     {
    //         public_id: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // reviews: [
    //     {
    //         name: {
    //             type: String,
    //             require: true
    //         },
    //         comment: {
    //             type: String,
    //             require: true
    //         },
    //         rating: {
    //             type: Number,
    //             default: 0
    //         }
    //     }
    // ]
})

module.exports = mongoose.model("product", productSchema)