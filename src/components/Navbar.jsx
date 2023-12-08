import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <Link className="navbar-brand" to="/">
            ShopiFY
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <Link className="nav-link" class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className=" buttons">
              <button className="btn"><Link to="/login" className="nav-link">
                <FaSignInAlt className="me-1" />
                Login
              </Link></button>
              <button className="btn">   <Link to="/register" className="nav-link">
                <FaUserPlus className="me-1" />
                Register
              </Link></button>
              <button className="btn">         <Link to="/cart" className="nav-link">
                <FaShoppingCart className="me-1" />
                Cart ({cart.length})
              </Link></button>
            </div>

          </div>
        </div>
      </nav>

    </>

  );
};

export default Navbar;
