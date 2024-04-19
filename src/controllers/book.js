import { Router } from "express"
import { createBook, deleteBook, updateBook, findBook, } from "../services/book.js"

const router = Router()


router.get('/:id', async (req, res) => {
    try {
        const bookChosen = await findBook(req.params.id);
        console.log(bookChosen);
        if (!bookChosen) {
            res.status(404).send({ error: 'Livro não encontrado' });
        } else {
            res.send(bookChosen);
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const book = await createBook(req.body)
        res.status(201).send(book)
    } catch (err) {
        res.status(400).send(err)
    }

})

router.delete('/:bookId', async (req, res) => {
    await deleteBook(req.params.bookId)
    res.send()
})


router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await updateBook(req.params.id, req.body);
        console.log(updatedBook);
        res.send(updatedBook);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar o livro');
    }
});




export default router

