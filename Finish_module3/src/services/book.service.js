const database = require('../configs/db.config')
async function getAllBook() {
    const query = "SELECT * from books";
    let result = await database.execute(query);
    return result[0]
}

// lấy 1 user
async function getOnlyBook(req, res) {
    let {id} = req.params
    const query = `select * from books where id = ${id}`;
    let result = await database.execute(query);
    return result[0]
}

// thêm mới
async function creatBook(data) {
    const {name, description, price, created_at,updated_at} = data
    const query = `INSERT INTO books (name, description, price, created_at, updated_at)
                    VALUES ('${name}', '${description}', '${price}', '${created_at}', '${updated_at}')`;
    let result = await database.execute(query);
    return result[0]

}

async function deleteBook(data) {
    console.log("aaaaa",data);
    const {id} = data
    const query = `DELETE FROM books WHERE id = '${id}'`;
    let result = await database.execute(query)
    return result[0]
}

async function creatAuthor(data) {
    const {name, biography} = data
    const query = `INSERT INTO authors (name, biography)
                    VALUES ('${name}', '${biography}')`;
    let result = await database.execute(query);
    return result[0]

}
module.exports = {
    getAllBook,
    creatBook,
    deleteBook,
    creatAuthor,
}