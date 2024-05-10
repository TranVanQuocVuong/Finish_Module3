const express = require('express');
const database = require('../configs/db.config')

// const database = require('../connection/connetionMySql');
const bookController = require('../controllers/book.controller')

const jwt = require('jsonwebtoken')

const userRouter = express.Router();

// Tạo api lấy hết tất cả user
userRouter.get("/api/v1/books", (req, res) => {
    // viết câu lệnh kết nối
    bookController.getAllBook(req, res)
})

userRouter.post("/api/v1/book", (req, res) =>{
    bookController.creatBook(req, res)
})

userRouter.delete("/api/v1/book/:id", (req, res) =>{
    const sql = "DELETE FROM books WHERE id = ?";
    const id = req.params.id;
    database.query(sql, [id], (err, result) =>{
        if (err) {
            return res.json({
                Message: "Error"
            })
        }
        return res.json(result)
    })
})

userRouter.post("/api/v1/author", (req, res) =>{
    bookController.creatAuthor(req, res)
})
module.exports = userRouter;