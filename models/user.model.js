const mongoose = require('mongoose')
const uniqueValidator = require ('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email: { 
            type: String,
            required: true,
            unique: true 
        },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    biographie: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User