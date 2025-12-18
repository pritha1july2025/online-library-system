import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Bookcard from "./Bookcard"

export default function Home() {
  const books = useSelector(state => state.books || [])

  // ⭐ Popular books (high rating)
  const popularBooks = books.filter(book => book.rating >= 4.7).slice(0, 4)

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"]

  return (
    <div className="min-h-screen bg-black/40 text-white p-6">

      {/* Welcome Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          📚 Welcome to Online Library
        </h1>
        <p className="text-gray-200">
          Explore books, discover knowledge, and grow every day
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className="bg-white text-black px-5 py-2 rounded-full shadow hover:bg-gray-900 hover:text-white transition"
          >
            {cat}
          </Link>
        ))}
      </div>

    
      <h2 className="text-3xl font-bold mb-20 text-center">
        ⭐ Popular Books
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularBooks.map(book => (
          <Bookcard key={book.id} book={book} />
        ))}
      </div>

    </div>
  )
}
