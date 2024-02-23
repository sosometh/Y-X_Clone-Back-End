const express =require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.router')

// port d'écoute
const port = 4000

// création de l'app express
const app = express()
app.use(express.json())

// connexion au router
app.use('/connect', userRouter)

// route de test
app.get('/', (req,res) => {
    res.send('TEST OK')
})

// connexion à la base de donnée NoSql MongoDb
mongoose.connect('mongodb+srv://draaboufianso:1sc4tBLQaeQH4bnx@y-database.ehivcn2.mongodb.net/?retryWrites=true&w=majority&appName=Y-DataBase')
    .then(() => console.log('MongoDb connection OK'))
    .catch(error => console.log(error))

// Lancement de l'app sur le port <port>
app.listen(port, () => {
    console.log('Testing the app on port ' + port)
})
