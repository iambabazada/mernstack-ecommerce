const mongoose = require('mongoose')

const db = () => {
    mongoose.connect("mongodb+srv://iambabazada:12345678a@cluster0.oh4ccdg.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("mongoDB connect !!");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = db