import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {

  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    let lastScroll = 0;

   const handleScroll = () => {

  const currentScroll = window.pageYOffset;

  if(currentScroll > 50){
    setScrolled(true);
  }else{
    setScrolled(false);
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    setShowHeader(false);
  } else {
    setShowHeader(true);
  }

  lastScroll = currentScroll;
};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
      <header
        className={`header
        ${showHeader ? "show" : "hide"}
        ${scrolled ? "scrolled" : ""}`}
      >
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
               <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

          </div>

        </div>

      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          <a href="#">All Fans</a>
          <a href="#">Lights</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </>
  );
}