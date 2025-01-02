import React, { useState } from 'react';
import logo from "../images/logo/LogotipAxma.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img src={logo} alt="AXMA Security logo" className={"logo"} />
          <div className="burger-menu" onClick={toggleMenu}>
           <GiHamburgerMenu />
            </div>
            <nav className={isMenuOpen ? 'open' : ''}>
                <a href="#about">
                    ÜBER UNS
                </a>
                <a href="#services">
                    LEISTUNGEN
                </a>
                 <a href="#team">
                    TEAM
                </a>
                <a href="#contact">
                    KONTAKT
                </a>
            </nav>
        </header>
    );
}

export default Header;