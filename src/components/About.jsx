import React, { useState, useEffect, useRef, forwardRef } from "react";
import style from "./About.module.scss";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import nummer1 from "../images/nummber-WhiteThema/1.png";
import nummer2 from "../images/nummber-WhiteThema/2.png";
import nummer3 from "../images/nummber-WhiteThema/3.png";

const About = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const { ref: historyRef, inView: historyInView } = useInView({
    threshold: 0.2,
  });
  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.4,
  });
  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.5,
  });

  return (
    <Parallax speed={5}>
      <section
        id="about"
        ref={(el) => {
          aboutRef.current = el;
          if (ref) ref.current = el;
        }}
        className={`${style.section} ${
          isVisible ? style["animate-fade-in"] : ""
        }`}
      >
        <h2 className={style["about-h2"]}>Über Uns</h2>
        <p className={style["about-main-text"]}>
          Willkommen bei <strong>AXMA Security</strong>, Ihrem zuverlässigen
          Partner für professionelle Sicherheitslösungen. Unser Ziel ist es,
          Ihre Sicherheit und Ihr Wohlbefinden zu unserer obersten Priorität zu
          machen. Wir sind ein erfahrenes Team, das sich darauf spezialisiert
          hat, umfassende Sicherheitskonzepte zu entwickeln und umzusetzen.
        </p>
        <div className={style["about-description"]}>
          <div
            ref={historyRef}
            className={`${style["about-subsection"]} ${
              historyInView ? style["animate-text-in"] : ""
            }`}
          >
            <img src={nummer1} alt="nummer-1" loading="lazy"/>
            <h3 className={style["about-h3"]}>Unsere Geschichte</h3>
            <p>
              AXMA Security entstand aus der Vision, Sicherheit auf höchstem
              Niveau zu gewährleisten. Mit Leidenschaft und Expertise
              entwickelten wir uns zu einem zuverlässigen Partner in der
              Branche. Unsere Stärke liegt in individuellen Lösungen, modernster
              Technologie und einem klaren Fokus auf Qualität – für Ihre
              Sicherheit und Ihr Vertrauen.
            </p>
          </div>
          <div
            ref={valuesRef}
            className={`${style["about-subsection"]} ${
              valuesInView ? style["animate-text-in"] : ""
            }`}
          >
            <img src={nummer2} alt="nummer-2" loading="lazy"/>
            <h3 className={style["about-h3"]}>Unsere Werte</h3>
            <p>
              Bei AXMA Security stehen Integrität, Professionalität, und
              Kundenorientierung an erster Stelle. Wir sind ein Team, dass
              verantwortungsbewusst handelt, höchste ethische Standards einhält
              und sich ständig weiterbildet, um die beste Qualität für unsere
              Kunden zu gewährleisten. Wir setzen auf Zusammenarbeit,
              Transparenz und faire Geschäftsbeziehungen.
            </p>
          </div>
          <div
            ref={missionRef}
            className={`${style["about-subsection"]} ${
              missionInView ? style["animate-text-in"] : ""
            }`}
          >
            <img src={nummer3} alt="nummer-3" loading="lazy"/>
            <h3 className={style["about-h3"]}>Unsere Mission</h3>
            <p>
              Unsere Mission ist es, unseren Kunden ein Höchstmaß an Sicherheit
              und Schutz zu bieten. Wir setzen auf innovative Technologien und
              gut ausgebildete Mitarbeiter, um unsere Kunden optimal zu
              schützen. Wir wollen Ihr Partner in Sachen Sicherheit sein und mit
              Ihnen gemeinsam eine sichere Zukunft gestalten.
              <br /> AXMA Security. Auf Nummer sicher.
            </p>
          </div>
        </div>
      </section>
    </Parallax>
  );
});

export default About;
