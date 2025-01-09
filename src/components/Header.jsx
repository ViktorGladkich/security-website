import { useCallback, useState } from "react";
import style from "./Header.module.scss";
import logo from "../images/logo/LogotipAxma.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={style.header}>
      <Link to="/">
        <img
          src={logo}
          alt="AXMA Security logo"
          className={style.logo}
          onClick={handleLogoClick}
          loading="lazy"
        />
      </Link>

      <button
        className={style["burger-menu"]}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu /> MENÜ
      </button>
      <nav className={`${style.nav} ${isMenuOpen ? style.open : ""}`}>
        {isMenuOpen && (
          <div
            className={style["close-menu"]}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </div>
        )}
        <ul className={style.menu}>
          <li>
            <Link to="/#about" onClick={closeMenu}>ÜBER UNS</Link>
          </li>
          <li>
            <Link to="/#services" onClick={closeMenu}>LEISTUNGEN</Link>
          </li>
          <li>
            <Link to="/#team" onClick={closeMenu}>TEAM</Link>
          </li>
          <li>
            <Link to="/#referenzen" onClick={closeMenu}>REFERENZEN</Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMenu}>KONTAKT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
