const express =require('express')
const mongoose = require('mongoose')

const app = express()
const port = 4000

// connexion à la base de donnée NoSql MongoDb
mongoose.connect('mongodb+srv://draaboufianso:1sc4tBLQaeQH4bnx@y-database.ehivcn2.mongodb.net/?retryWrites=true&w=majority&appName=Y-DataBase')
    .then(() => console.log('MongoDb connection OK'))
    .catch(error => console.log(error))


// route de test
app.get('/', (req, res) => {
    res.send('Test du push')
})

// Lancement de l'app sur le port <port>
app.listen(port, () => {
    console.log('Testing the app on port ' + port)
})