const express = require('express')
const router = express.Router()

const userCrtl = require('../controllers/user')

// route test
router.get('/', (req,res) => {
    res.send('this is users route')
})

// route --> ajouter un user
router.post('/signup', userCrtl.signup)

module.exports = router