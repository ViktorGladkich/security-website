import React from 'react';
import { Parallax } from "react-scroll-parallax";
import { useInView } from 'react-intersection-observer';
import nummer1 from "../images/Nummber-WhiteThema/1.png"
import nummer2 from "../images/Nummber-WhiteThema/2.png"
import nummer3 from "../images/Nummber-WhiteThema/3.png"


function About({ aboutRef, aboutInView }) {
    const { ref: historyRef, inView: historyInView } = useInView({ threshold: 0.2 });
    const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.2 });
    const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.2 });
    return (
        <Parallax speed={5}>
            <section id="about" ref={aboutRef} className={`section ${aboutInView ? 'animate-fade-in' : ''}`}>
                <h2>Über Uns</h2>
                <p className='about-main-text'>
                    Wir sind ein Team von Experten mit langjähriger Erfahrung im Sicherheitsbereich.
                    Unsere Mitarbeiter sind bestens ausgebildet und motiviert, um Ihnen den bestmöglichen
                    Schutz zu gewährleisten. Wir legen großen Wert auf Professionalität, Zuverlässigkeit und
                   Diskretion.
                  </p>
                <div className='about-description'>
                  <div ref={historyRef}  className={`about-subsection ${historyInView ? 'animate-text-in' : ''}`}>
                    <img src={nummer1} alt='nummer-1'/>
                    <h3>Unsere Geschichte</h3>
                       <p>
                          AXMA Security wurde im Jahr 2019 von erfahrenen Sicherheitsexperten gegründet,
                           die sich zum Ziel gesetzt hatten, innovative und zuverlässige Sicherheitslösungen anzubieten.
                           Seitdem haben wir uns kontinuierlich weiterentwickelt und unser Angebot an Dienstleistungen und Produkten
                           erweitert. Wir sind stolz auf unsere langjährige Erfahrung und unsere Fähigkeit,
                           maßgeschneiderte Lösungen für unsere Kunden zu entwickeln.
                        </p>
                    </div>
                     <div ref={valuesRef} className={`about-subsection ${valuesInView ? 'animate-text-in' : ''}`}>
                     <img src={nummer2} alt='nummer-2'/>
                      <h3>Unsere Werte</h3>
                        <p>
                        Bei AXMA Security stehen Integrität, Professionalität, und Kundenorientierung an erster Stelle.
                             Wir sind ein Team, dass verantwortungsbewusst handelt, höchste ethische Standards einhält
                           und sich ständig weiterbildet, um die beste Qualität für unsere Kunden zu gewährleisten.
                            Wir setzen auf Zusammenarbeit, Transparenz und faire Geschäftsbeziehungen.
                        </p>
                        </div>
                  <div ref={missionRef} className={`about-subsection ${missionInView ? 'animate-text-in' : ''}`}>
                  <img src={nummer3} alt='nummer-3'/>
                     <h3>Unsere Mission</h3>
                        <p>
                          Unsere Mission ist es, unseren Kunden ein Höchstmaß an Sicherheit und Schutz zu bieten.
                           Wir setzen auf innovative Technologien und gut ausgebildete Mitarbeiter, um unsere Kunden optimal zu schützen.
                           Wir wollen Ihr Partner in Sachen Sicherheit sein und mit Ihnen gemeinsam eine sichere Zukunft gestalten.
                             <br /> AXMA Security. Auf Nummer sicher.
                             
                       </p>
                       
                       
                   </div>
                  
                </div>
            </section>
        </Parallax>
    );
}

export default About;