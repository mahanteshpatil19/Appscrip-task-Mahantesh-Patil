import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </div>

        {/* Desktop nav */}
        <ul className="nav-left">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>

        <div className="logo">LOGO</div>

        <div className="nav-right">
          <span>🔍</span>
          <span>♡</span>
          <span>🛒</span>
          <span>👤</span>
          <span className="lang">EN</span>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      )}
    </header>
  );
}
