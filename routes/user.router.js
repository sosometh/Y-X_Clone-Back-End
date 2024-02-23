const express = require('express')
const router = express.Router()

const userCrtl = require('../controllers/user')

// route test
router.get('/', (req,res) => {
    res.send('this is users route')
})

// Ajouter un user
router.post('/signup', userCrtl.signup)
// Obtenir un token de connexion
router.post('/signin', userCrtl.signin)

module.exports = router