import { Link } from "react-router-dom"
import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/books/Fiction">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  )
}