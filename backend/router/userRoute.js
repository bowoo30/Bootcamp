const express = require('express')
const { getUsers, getById, updateUser, deleteUser, Register, login, logout } = require('../controller/userController')
const { authMiddlerware } = require('../middleware/Auth')
const { tokenRefresh } = require('../controller/refreshToken')
const router = express.Router()

router.get('/users',getUsers)
router.get('/user/:id', getById)
router.post('/user', Register )
router.put('/user/:id', updateUser )
router.delete('/user/:id', deleteUser)
router.post('/login', login)
router.get('/token', tokenRefresh)
router.delete('/logout', logout)

module.exports = router