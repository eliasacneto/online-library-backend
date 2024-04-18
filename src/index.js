import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/book.js'
import { listBooks, createBook } from './services/book.js'

const app = express()
const PORT = 8080

app.use(bodyParser.json())


app.get('/', async (req, res) => {
    res.send('GET!')
})

app.use('/book', userController)


app.listen(PORT, () => { console.log(` 🔥 Server running on http://localhost:${PORT}`) })