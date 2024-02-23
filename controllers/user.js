const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Permet d'enregistrer un utilisateur
exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hashed => {
            const user = new User({
                email: req.body.email,
                password: hashed,
                nom: req.body.nom,
                prenom: req.body.prenom,
                biographie: req.body.biographie,
                age: req.body.age
            })
            user.save()
                .then(() => res.status(201).send({ message: "User created" }))
                .catch(error => res.status(400).send({ error }))
        })
        .catch(error => res.status(500).send({ error }))
}

// Permet d'avoir un token de connexion
exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).send({ message: "no account" })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).send({ message: "invalid user" })
                    }
                    res.status(200).send({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'todoGenerateKey',
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).send({ error }))
        })
        .catch(error => res.status(500).send({ error }))
}