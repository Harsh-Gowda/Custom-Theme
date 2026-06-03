import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Magnific
        </Link>

        <nav className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;