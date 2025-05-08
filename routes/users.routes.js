const express = require('express')
const router = express.Router()

const {
    getUsers, 
    getUserById,
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/users.controller')

router.get('/usuarios', getUsers)

router.get('/usuarios/:id', getUserById)

router.post('/usuarios', createUser)

router.put('/usuarios/:id', updateUser)

router.delete('/usuarios/:id', deleteUser)

module.exports = router