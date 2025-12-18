import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import React from "react"
export default function BookDetails() {
  const { id } = useParams()

  const book = useSelector(state =>
    state.books.find(b => b.id === Number(id))
  )

  // ✅ SAFETY CHECK (IMPORTANT)
  if (!book) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Book not found</h2>
        <Link to="/" className="text-blue-600">Go Home</Link>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>⭐ {book.rating}</p>

      <Link to={`/books/${book.category}`} className="text-blue-600">
        Back to Browse
      </Link>
    </div>
  )
}
