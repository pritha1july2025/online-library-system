import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import BrowseBooks from "./components/BrowseBooks"
import BookDetails from "./components/BookDetails"
import AddBook from "./components/AddBook"
import NotFound from "./components/NotFound"

export default function App() {
  const location = useLocation()

  // hide navbar ONLY on NotFound
  const hideNavbar = location.pathname !== "/" &&
                     !location.pathname.startsWith("/books") &&
                     !location.pathname.startsWith("/book") &&
                     location.pathname !== "/add"

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
