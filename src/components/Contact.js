import React from "react";


import {
  MdOutlinePerson,
  MdOutlineEmail,
  MdOutlineMessage,
} from "react-icons/md";
function Contact({
  contactRef,
  contactInView,
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  formErrors,
  formStatus,
}) {
  return (
    <section
      id="contact"
      ref={contactRef}
      className={`section ${contactInView ? "animate-fade-in" : ""}`}
    >
      <h2>KONTAKT</h2>
      <p>
        Sie haben ein privates oder geschäftliches Sicherheitsanliegen? Wir
        freuen uns über Ihre Anfrage. Bitte füllen Sie dazu einfach das folgende
        Formular aus oder kontaktieren uns telefonisch. <br />
        Unsere Hotline ist täglich 24 Stunden für Sie erreichbar:{" "}
        <strong>0172 9999999</strong>
      </p>
      <form onSubmit={handleSubmit}>
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
            required
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
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
            required
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
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
            required
          ></textarea>
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </div>
        {formStatus === "submitting" && <p>Submitting...</p>}
        {formStatus === "error" && <p>There was an error. Please try again</p>}
        <button type="submit">SENDEN</button>
      </form>
    </section>
  );
}

export default Contact;
