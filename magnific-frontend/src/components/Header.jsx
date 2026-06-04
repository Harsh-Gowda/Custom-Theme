import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-10 py-4 flex items-center justify-between bg-orange-300 rounded-full ">



        <nav className="flex gap-6" text-sm>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Magnific
        </Link>
        <nav className="flex gap-6" text-sm>
          <Link>
            <div className="cart-link flex items-center gap-6">
              <span className="text-sm">Cart</span>
              <span className="text-sm">Account</span>
              <Link to="/shop">Shop</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;