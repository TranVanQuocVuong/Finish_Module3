const bookService = require('../services/book.service')

async function getAllBook(req, res) {
    let users = await bookService.getAllBook()
    res.status(200).json({
        data: users
    })
}

async function creatBook(req, res) {
    const {name, description, price, created_at,updated_at} = req.body
    const user = await bookService.creatBook(req.body)
        res.status(200).json({
            data: user
        })
}

async function deleteBook(req, res) {
    console.log("11111", req.body);
    const {id} = req.body
    const user = await bookService.deleteBook(req.body)

    res.status(200).json({
        data: user
    })
}

async function creatAuthor(req, res) {
    const {name, biography} = req.body
    const user = await bookService.creatAuthor(req.body)
        res.status(200).json({
            data: user
        })
}
module.exports = {
    getAllBook,
    creatBook,
    deleteBook,
    creatAuthor,
}