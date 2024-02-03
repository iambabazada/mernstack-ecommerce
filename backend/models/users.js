const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    role: {
        type: String,
        default: "user",
        required: true
    }
})


module.exports = mongoose.model('Users', userScheme)