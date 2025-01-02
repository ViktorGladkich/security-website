import React from 'react';
import { Parallax } from "react-scroll-parallax";
import { useInView } from 'react-intersection-observer';
import image1 from "../images/team/team1.png"
import image2 from "../images/team/team2.png"
import image3 from "../images/team/team3.png"

function Team({ teamRef, teamInView }) {
    const { ref: careerRef, inView: careerInView } = useInView({ threshold: 0.2 });
  return (
    <Parallax speed={5}>
      <section
        id="team"
        ref={teamRef}
        className={`section ${teamInView ? 'animate-fade-in' : ''}`}
      >
        <h2>Unser Team</h2>
        <p style={{maxWidth: "705px"}}>
          Wir sind ein Team von Experten mit langjähriger Erfahrung im Sicherheitsbereich.
          Unsere Mitarbeiter sind bestens ausgebildet und motiviert, um Ihnen den bestmöglichen
          Schutz zu gewährleisten. Wir legen großen Wert auf Professionalität, Zuverlässigkeit und
          Diskretion.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img src={image1} alt="Team Member 1" />
            <h3>Muslim</h3>
            <p>Experte für Veranstaltungsschutz</p>
          </div>
          <div className="team-member">
            <img src={image2} alt="Team Member 2" />
            <h3>Viktor</h3>
            <p>Experte für Objektschutz</p>
          </div>
          <div className="team-member">
            <img src={image3} alt="Team Member 3" />
            <h3>Murad</h3>
            <p>Experte für Personenschutz</p>
          </div>
        </div>
        <div
          className={`team-career ${careerInView ? 'animate-career' : ''}`}
          ref={careerRef}
        >
          <h3 className="team-career-title">KARRIERE BEI AXMA SECURITY</h3>
          <p className="team-career-text">
            Du bist motiviert und suchst eine Herausforderung in einem spannenden und abwechslungsreichen Umfeld? Dann bist du bei uns richtig!
            Wir bieten dir vielfältige Karrierechancen in der Sicherheitsbranche und unterstützen deine persönliche und berufliche Entwicklung.
            Bewirb dich jetzt und werde Teil unseres Teams!
          </p>
        </div>
       
      </section>
    </Parallax>
  );
}

export default Team;