import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/book.js'
import cors from 'cors'

const app = express()
const PORT = 8080

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
    res.send('🔥 Online Library Backend!')
})

app.use('/book', userController)


app.listen(PORT, () => { console.log(` 🔥 Server running on http://localhost:${PORT}`) })