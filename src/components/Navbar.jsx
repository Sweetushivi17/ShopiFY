import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSignInAlt , FaUserPlus , FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);




  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm border">
        <div className="container ">
            <Link className="navbar-brand fw-bold" to="/">ShopiFY</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            <div className="nav-buttons">
                <Link to="login" className="btn btn-outline-dark"><FaSignInAlt className='me-1'/>Login</Link>
                <Link to="/register" className="btn btn-outline-dark ms-2"><FaUserPlus className='me-1'/>Register</Link>
                <Link to="/cart" className="btn btn-outline-dark ms-2"><FaShoppingCart className='me-1'/>Cart({cart.length})</Link>

            </div>
            </div>
        </div>
    </nav>
</div>

    
  );
};

export default Navbar;
