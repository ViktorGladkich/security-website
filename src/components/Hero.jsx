import style from "./Hero.module.scss";
import { useInView } from "react-intersection-observer";
import { MdOutlineEmail } from "react-icons/md";

function Hero({ heroRef, heroInView }) {
  const { ref, inView } = useInView({ threshold: 0.6 });
  return (
    <section
      id="hero"
      ref={heroRef}
      className={`${style["hero-section"]} ${style.section} ${
        heroInView ? style["animate-fade-in"] : ""
      }`}
    >
      <div
        ref={ref}
        className={`${style["hero-text"]} ${
          inView ? style["animate-text-left"] : ""
        }`}
      >
        <h2>AXMA Security: Ihr Schutz ist unsere Priorität!</h2>
        <p>Kontaktieren Sie uns noch heute.</p>
        <a href={"#contact"} className={style["contact-button"]}>
          KONTAKT <MdOutlineEmail />
        </a>
      </div>
    </section>
  );
}

export default Hero;
