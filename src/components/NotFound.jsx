import { useLocation, Link } from "react-router-dom"
import React from "react"
export default function NotFound() {
  const location = useLocation()

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <p>{location.pathname}</p>
      <Link to="/" className="text-blue-600">Go Home</Link>
    </div>
  )
}
