const express = require('express')

const { login, register } = require('../controllers/user.js')

const router = express.Router()


router.post('/login', login);
router.post('/register', register);