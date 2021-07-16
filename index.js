const express = require('express')
const path = require('path')
const server = express()
const PORT = 3030

server.use(express.static('public')) // middleware

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

server.listen(PORT, () => console.log('Escuchando puerto ' + PORT));