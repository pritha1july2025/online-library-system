// Reusable book card component for displaying book information

import React from "react"
import { Link } from "react-router-dom"

export default function Bookcard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 border">
      <h3 className="text-xl font-bold text-gray-800 mb-1">
        {book.title}
      </h3>

      <p className="text-gray-600 mb-2">
        ✍️ {book.author}
      </p>

      <p className="text-sm text-gray-500 mb-3">
        Category: <span className="font-medium">{book.category}</span>
      </p>

      <Link
        to={`/book/${book.id}`}
        className="inline-block mt-2 text-blue-500 font-semibold hover:underline"
      >
        View Details →
      </Link>
    </div>
  )
}
