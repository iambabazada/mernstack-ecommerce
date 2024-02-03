const User = require('../models/users.js')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.findOne({ email })

    if (user) {
        return res.status(500).json({ message: "Böyle bir kullanıcı mevcut" })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    if (password.length < 6) {
        return res.status(500).json({ message: "Şifre 6 karakterden az olamaz" })
    }

    const newUser = await User.create({ name, email, password: passwordHash })

    const token = await jwt.sign({ id: newUser._id }, "SECRETTOKEN", { expiresIn: '1h' })

    const cookieOptions = {
        httpOnly: true,
        expires: new Date() + 5 * 24 * 60 * 60 * 1000
    }

    res.status(201).cookie("token", token, cookieOptions).json({
        newUser,
        token
    })
}

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(500).json({ message: "Böyle bir kullanıcı kayıtlı değil" })
    }

    const comparePassword = await bcrypt.compare(password, user.password)

    if (!comparePassword) {
        return res.status(500).json({ message: "Şifre yanlış" })
    }

    const token = await jwt.sign({ id: user._id }, "SECRETTOKEN", { expiresIn: '1h' })

    const cookieOptions = {
        httpOnly: true,
        expires: new Date() + 5 * 24 * 60 * 60 * 1000
    }

    res.status(200).cookie("token", token, cookieOptions).json({
        user,
        token
    })
}

module.exports = { login, register }
