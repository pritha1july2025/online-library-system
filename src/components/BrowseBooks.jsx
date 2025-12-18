import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import Bookcard from "./Bookcard"

export default function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(state => state.books || []) // ✅ SAFE
  const [search, setSearch] = useState("")

  // ✅ HANDLE INVALID CATEGORY
  if (!category) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Please select a category</h2>
      </div>
    )
  }

  const filteredBooks = books.filter(
    b =>
      b.category === category &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className=" bg-black/50 text-white p-6">
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search by title or author"
        onChange={e => setSearch(e.target.value)}
      />

      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredBooks.map(book => (
            <Bookcard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}
