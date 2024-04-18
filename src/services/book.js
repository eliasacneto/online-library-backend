import databaseConnection from '../utils/database.js'
import Book from '../models/book.js'

export const listBooks = async () => {
    await databaseConnection()
    const books = await Book.find()
    return books
}

export const createBook = async (book) => {
    await databaseConnection()
    const createdBook = await Book.create(book)
    return createdBook
}

export const deleteBook = async (id) => {
    await databaseConnection()
    await Book.findByIdAndDelete(id)
}

export const updateBook = async (id, newBody) => {
    await databaseConnection()
    await Book.findByIdAndUpdate(id, newBody)
}