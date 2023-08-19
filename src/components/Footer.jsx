import React from 'react'

const Footer = () => {
  return (
<footer className="py-3 mt-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Home</a></li>
      <li className="nav-item"><a href="/products" className="nav-link px-2 text-light ">Products</a></li>
      <li className="nav-item"><a href="/contact" className="nav-link px-2 text-light">Contact-Us</a></li>
      <li className="nav-item"><a href="/about" className="nav-link px-2 text-light ">About</a></li>
    </ul>
    <p className="text-center text-light">© 2023 Company, Inc</p>
  </footer>
  )
}

export default Footer
