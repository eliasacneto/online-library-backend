import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/book.js'
import booksController from './controllers/books.js'
import cors from 'cors'
import book from './models/book.js'

const app = express()
const PORT = process.env.PORT || 3001;
app.use(cors())

app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.send('🔥 Library Backend is on!')
})

app.use('/book', userController)
app.use('/books', booksController)

app.get('/books', (req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json({ error: err.message }))
})

app.listen(PORT, () => { console.log(` 🔥 Server is running...`) })