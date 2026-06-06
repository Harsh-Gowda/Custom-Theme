import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <div className="header-left">
          <a href="#">All Fans</a>
          <a href="#">Lights</a>
          <a href="#">About</a>
        </div>

        <div className="header-logo">
          Magnific
        </div>

        <div className="header-right">

          <div className="cart">
            🛒 <span>0</span>
          </div>

          <button className="contact-btn">
            Contact
          </button>

        </div>

      </div>

    </header>
  );
}