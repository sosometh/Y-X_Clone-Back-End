const User = require('../models/user.model')
const bcrypt = require('bcrypt')

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
