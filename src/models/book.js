import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    title: { type: String, required: true },
    pageNumbers: { type: Number, required: true },
    isbn: { type: Number, required: true, unique: true },
    publishCompany: { type: String, required: true }
})
export default mongoose.models.Book || mongoose.model('Book', BookSchema)