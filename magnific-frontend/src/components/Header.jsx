import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="logo">
          <Link to="/">Magnific</Link>
        </div>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">Cart</span>
            <span className="user">My Account</span>
          </Link>
        </div>


      </div>
    </header>
  );
}

export default Header;