import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import style from "./Contact.module.scss";
import {
  MdOutlinePerson,
  MdOutlineEmail,
  MdOutlineMessage,
} from "react-icons/md";
import { validateForm } from "../utils/formValidation";

const Contact = forwardRef((props, ref) => {
  const { openModal } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const errors = validateForm(name, email, message);
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        setFormStatus("submitting");
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          openModal();
          setFormErrors({});
          setFormStatus("success");
        }, 500);
      } else {
        setFormStatus("error");
      }
    },
    [name, email, message, openModal]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={(el) => {
        contactRef.current = el;
        if (ref) ref.current = el;
      }}
      className={`${style.section} ${
        isVisible ? style["animate-fade-in"] : ""
      }`}
    >
      <h2 className={style["contact-h2"]}>KONTAKT</h2>
      <p className={style["contact-p"]}>
        Sie haben ein privates oder geschäftliches Sicherheitsanliegen? Wir
        freuen uns über Ihre Anfrage. Bitte füllen Sie dazu einfach das folgende
        Formular aus oder kontaktieren uns telefonisch. <br />
        Unsere Hotline ist täglich 24 Stunden für Sie erreichbar:{" "}
        <strong>0172 9999999</strong>
      </p>
      <form onSubmit={handleSubmit} className={style["contact-form"]}>
        <div>
          <label htmlFor="name">
            <MdOutlinePerson />
            IHR NAME:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors?.name && (
            <span className={style.error}>{formErrors.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">
            <MdOutlineEmail />
            IHRE MAILADRESSE:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors?.email && (
            <span className={style.error}>{formErrors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="message">
            <MdOutlineMessage />
            IHRE NACHRICHT:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {formErrors?.message && (
            <span className={style.error}>{formErrors.message}</span>
          )}
        </div>
        {formStatus === "submitting" && <span>Submitting...</span>}
        {formStatus === "error" && (
          <span style={{ padding: 10 + "px", color: "red" }}>
            Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
          </span>
        )}
        <button type="submit">SENDEN</button>
      </form>
    </section>
  );
});

export default Contact;
