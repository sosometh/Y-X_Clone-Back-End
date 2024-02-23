const express =require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Test du push')
})

app.listen(port, () => {
    console.log('Testing the app on port ' + port)
})