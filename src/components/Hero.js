import React from 'react';
import { Parallax } from "react-scroll-parallax";
import { useInView } from 'react-intersection-observer';
import { MdOutlineEmail } from "react-icons/md";

function Hero({heroRef, heroInView}) {
    const { ref, inView } = useInView({ threshold: 0.2 });
    return (
      <Parallax speed={-10}>
         <section id="hero" ref={heroRef} className={`hero-section section ${heroInView ? 'animate-fade-in' : ''}`}>
         <div ref={ref} className={`hero-text ${inView ? 'animate-text-left' : ''}`}>
                 <h2>AXMA Security: Ihr Schutz ist unsere Priorität!</h2>
                 <p>Kontaktieren Sie uns noch heute.</p>
                 <a href={"#contact"} className={"contact-button"}>KONTAKT <MdOutlineEmail/></a>
               </div>
        </section>
       </Parallax>
    );
}

export default Hero;