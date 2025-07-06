import React from 'react'
import "../App.css"
const Navbar = () => {
  return (
    <nav>
        <a href="/" className="navbar-brand">Blogify</a>
      <a href="/blog/add" className="navbar-link">New Post</a>
    </nav>
  )
}

export default Navbar
