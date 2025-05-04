import React from "react"
import { navigationLinks } from "../data/header"
import "../styles/Header.scss"

// search functionality
// hover effect
export const Header = () => {
    return (
        <header className="header-container visible-desktop">
            <a href='/' className="header-container__logo">
                <img src="/logo.png" alt="logo" />
            </a>
            <div className="header-container__navigation">
                <nav className="navigation-container">
                    {navigationLinks.map(nav => 
                        <a key={nav.id} href={nav.path} className="navigation-item">{nav.name}</a>
                    )}
                </nav>
            </div>
            {/* Depricate */}
            <input placeholder="Search" className="header-container__search" />
        </header>
    )
};

