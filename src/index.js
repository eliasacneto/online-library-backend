import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/book.js'
import booksController from './controllers/books.js'
import cors from 'cors'
import book from './models/book.js'
import { listBooks } from './services/book.js'

const app = express()
const PORT = process.env.PORT || 3001;
app.use(cors())

app.use(bodyParser.json())

// app.get('/', async (req, res) => {
//     res.send('🔥 Library Backend is on!')
// })

app.use('/book', userController)

app.get('/', async (req, res) => {
    const bookList = await listBooks()
    res.send(bookList)
})

app.listen(PORT, () => { console.log(` 🔥 Server is running...`) })