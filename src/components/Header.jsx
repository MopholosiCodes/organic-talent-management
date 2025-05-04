import React,{useState} from "react"
import { navigationLinks } from "../data/header"
import "../styles/Header.scss"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
        <header className="header-container">
          <a href="/" className="header-container__logo">
            <img src="/logo.png" alt="logo" />
          </a>
  
          {/* Desktop Navigation */}
          <nav className="navigation-container desktop-nav">
            {navigationLinks.map((nav) => (
              <a key={nav.id} href={nav.path} className="navigation-item">
                {nav.name}
              </a>
            ))}
          </nav>
  
          {/* Search bar (Desktop only) */}
          <input type="text" placeholder="Search" className="header-container__search" />
  
          {/* Hamburger Menu (Mobile only) */}
          <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>
  
        {/* Mobile Side Navigation */}
        <div className={`side-nav ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ×
          </button>
          {navigationLinks.map((nav) => (
            <a key={nav.id} href={nav.path} className="side-nav__item">
              {nav.name}
            </a>
          ))}
        </div>
      </>
    );
  };