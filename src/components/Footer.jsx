import React from 'react'

const Footer = () => {
  return (
<footer >
    <ul >
      <li className="nav-item"><a href="/" className="nav-link ">Home</a></li>
      <li className="nav-item"><a href="/products" className="nav-link ">Products</a></li>
      <li className="nav-item"><a href="/contact" className="nav-link">Contact-Us</a></li>
      <li className="nav-item"><a href="/about" className="nav-link  ">About</a></li>
    </ul>
    <p className="text-center text-light">© 2023 Company, Inc</p>
  </footer>
  )
}

export default Footer
