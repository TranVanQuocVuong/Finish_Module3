import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [books, setBooks] = useState({
        name: "",
        description: "",
        price: "",
        created_at: "",
        updated_at: ""
    });
    const [author, setAuthor] = useState({
        name:"",
        biography:""
    })
    const [book, setBook] = useState([])
    useEffect(async () => {
        let result = await axios.get("http://localhost:8080/api/v1/books")
        setBook(result.data.data)
    }, [])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setBooks({
            ...books, [name]: value
        })
        setAuthor({
            ...author, [name]: value
        })
    }

    const save = async () => {
        let reponse = await axios.post("http://localhost:8080/api/v1/book", books)
            .then(res => {
                alert("thêm thành công")
                location.reload()
            })
            .catch(err => console.log(err))
        setJobs({ name: "", description: "", price: "", created_at: "", updated_at: "" })
    }

    const updateBook = () => {

    }

    const deleteBook = (id) => {
        axios.delete('http://localhost:8080/api/v1/book/'+ id)
            .then(res => {
                alert("xóa thành công")
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const saveAuthor = async () =>{
        let reponse = await axios.post("http://localhost:8080/api/v1/author", author)
            .then(res => {
                alert("thêm thành công")
                location.reload()
            })
            .catch(err => console.log(err))
        setAuthor({ name: "", biography: ""})
    }
    return (
        <div className='main'>
            <div>
            <h2>Nhập thông Book</h2>
            <input
                placeholder='Name Book'
                name='name'
                type="text"
                onChange={handleChange}
            />
            <input
                placeholder='Description'
                name='description'
                type="text"
                onChange={handleChange}
            />
            <input
                placeholder='Price'
                name='price'
                type="number"
                onChange={handleChange}
            />
            <input
                placeholder='Created_at'
                name='created_at'
                type="date"
                onChange={handleChange}
            />
            <input
                placeholder='Updated_at'
                name='updated_at'
                type="date"
                onChange={handleChange}
            />
            <button onClick={save}>Save</button>
            </div>
            <div>
            <h2>Nhập thông tin Author</h2>
            <input
                placeholder='Name Athor'
                name='name'
                type="text"
                onChange={handleChange}
            />
            <input
                placeholder='Biography'
                name='biography'
                type="text"
                onChange={handleChange}
            />
            <button onClick={saveAuthor}>Save Author</button>
            </div>
            <div>
            <h2>Danh Sách Book</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Book</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Create</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((item, index, arr) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.created_at}</td>
                                <td>{item.updated_at}</td>
                                <td>
                                    <button onClick={() => updateBook(item.id)} >Update</button>
                                    <button onClick={() => deleteBook(item.id)} >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
