import style from "./Footer.module.scss";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.containerFooter}>
        <div className={style.contactInfo}>
          <p>
            <MdLocationOn />
            <a
              href="https://www.google.com/maps?q=St.+Petersburger+Straße+26,+01069+Dresden"
              target="_blank"
              rel="noopener noreferrer"
            >
              St. Petersburger Straße 26, 01069 Dresden
            </a>
          </p>
          <p>
            <MdEmail />
            <a href="mailto:info@axmasecurity.de">info@axmasecurity.de</a>
          </p>
          <p>
            <MdPhone />
            <a href="tel:+49123456789">+49 123 456 789</a>
          </p>
          <span>
            <FaCopyright /> AXMA Security {new Date().getFullYear()}{" "}
          </span>
        </div>

        <div className={style.footerLinks}>
          <a href="https://instagram.com">
            <BsInstagram />
          </a>
          <a href="https://wa.me/+4915212339391">
            <BsWhatsapp />
          </a>
          <a href="https://t.me/имяпользователя">
            <BsTelegram />
          </a>
        </div>
        <div className={style.footerLegal}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
