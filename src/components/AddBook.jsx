// Form component to add a new book into Redux store


import { useDispatch } from "react-redux"
import { addBook } from "../utils/bookSlice";
import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddBook() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit=e=>{
e.preventDefault()
if(!form.title||!form.author ||!form.category)
    return 
  dispatch(addBook({ ...form, id: Date.now() }))
    navigate(`/books/${form.category}`)
  }

   return (
    <form onSubmit={submit} className=" bg-black/40 text-white font-bold p-6 max-w-md mx-auto">
      <input className="border p-2 w-full mb-2" placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })} />
      <input className="border p-2 w-full mb-2" placeholder="Author"
        onChange={e => setForm({ ...form, author: e.target.value })} />
      <input className="border p-2 w-full mb-2" placeholder="Category"
        onChange={e => setForm({ ...form, category: e.target.value })} />
      <button className="bg-gray-600 text-white px-4 py-2 rounded">
        Add Book
      </button>
    </form>
  )
}

