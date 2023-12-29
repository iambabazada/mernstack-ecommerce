const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const product = require('./router/product.js')

const db = require('./config/db.js')
const app = express()
const port = 3000
app.use(cors())

app.use(bodyParser.json());
app.use('/', product)

db()

app.listen(port, () => {
    console.log("server is runing 3000");
})