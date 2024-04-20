import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/book.js'
import booksController from './controllers/books.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080;
app.use(cors())

app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.send('🔥 Library Backend is on!')
})

app.use('/book', userController)
app.use('/books', booksController)

app.listen(PORT, () => { console.log(` 🔥 Server is running...`) })