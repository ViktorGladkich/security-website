import style from "./Impressum.module.scss";

function Impressum() {
  return (
    <article className={style.impressum}>
      <h2>Impressum</h2>
      <p>
        **Angaben gemäß § 5 TMG:**
        <br />
        AXMA Security <br />
        Musterstraße 123
        <br />
        01069 Dresden
      </p>
      <p>
        **Vertreten durch:** <br />
        Max Mustermann
      </p>
      <p>
        **Kontakt:**
        <br />
        Telefon: 0123-456789 <br />
        E-Mail: info@axmasecurity.de
      </p>
      <p>
        **Umsatzsteuer-ID:**
        <br />
        DE123456789
      </p>
      <p>
        **Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:**
        <br />
        Max Mustermann
      </p>
    </article>
  );
}

export default Impressum;
