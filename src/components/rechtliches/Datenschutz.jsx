import style from "./Datenschutz.module.scss";

function Datenschutz() {
  return (
    <article className={style.datenschutz}>
      <h2>Datenschutzerklärung</h2>
      <p>
        **Allgemeines:** <br />
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
        Datenschutzerklärung informiert Sie darüber, wie wir Ihre Daten erheben
        und verarbeiten.
      </p>
      <p>
        **Erhebung und Verarbeitung von Daten:**
        <br />
        Wir erheben und verarbeiten personenbezogene Daten nur, wenn dies zur
        Bereitstellung unserer Dienstleistungen erforderlich ist. Dazu gehören
        z.B. Ihr Name, Ihre E-Mail Adresse, Ihre Telefonnummer und Ihre
        Anschrift.
      </p>
      <p>
        **Zweck der Datenverarbeitung:** <br />
        Wir verwenden Ihre Daten nur für die Zwecke, für die sie erhoben wurden.
        Wir speichern Ihre Daten nur so lange, wie es für die Erfüllung dieser
        Zwecke erforderlich ist.
      </p>
      <p>
        **Ihre Rechte:** <br />
        Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten.
        Sie haben auch das Recht auf Berichtigung, Löschung oder Sperrung Ihrer
        Daten. Bitte kontaktieren Sie uns hierfür.
      </p>
    </article>
  );
}

export default Datenschutz;
