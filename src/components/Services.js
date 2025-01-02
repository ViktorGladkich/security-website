import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import img1 from "../images/services/veranstalungsschutz/Security _VERANSTALTUNGSSCHUTZ1.png";
import img2 from "../images/services/veranstalungsschutz/Security _VERANSTALTUNGSSCHUTZ.png";
import img3 from "../images/services/veranstalungsschutz/Security _VERANSTALTUNGSSCHUTZ2.png";
import img4 from "../images/services/fluchtlingsunterkunfte/FLUCHTLINGS2.png";
import img5 from "../images/services/fluchtlingsunterkunfte/FLUCHTLINGS1.png";
import img6 from "../images/services/fluchtlingsunterkunfte/FLUCHTLINGS3.png";
import img7 from "../images/services/objektschutz/objekschutz1.png";
import img8 from "../images/services/objektschutz/objekschutz2.png";
import img9 from "../images/services/objektschutz/objekschutz3.png";
import img10 from "../images/services/personenschutz/personenschutz2.png";
import img11 from "../images/services/personenschutz/personenschutz1.png";
import img12 from "../images/services/personenschutz/personenschutz3.png";
import img13 from "../images/services/sicherheitskonzeption/sicherheitskonzepte1.png";
import img14 from "../images/services/sicherheitskonzeption/sicherheitskonzepte2.png";
import img15 from "../images/services/sicherheitskonzeption/sicherheitskonzepte3.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView } from "react-intersection-observer";

function Services({ servicesRef, servicesInView }) {
  const services = [
    {
      title: "VERANSTALTUNGSSCHUTZ",
      description:
        "Wir sorgen für die Sicherheit Ihrer Veranstaltungen. Von der Planung bis zur Durchführung sind wir an Ihrer Seite. Wir bieten umfassende Sicherheitskonzepte für Veranstaltungen jeder Größe und Art.",
      images: [img1, img2, img3],
    },
    {
      title: "PERSONENSCHUTZ",
      description:
        "Ihr Schutz ist unsere Priorität. Unsere erfahrenen Personenschützer sorgen für Ihre Sicherheit und Privatsphäre. Wir bieten diskreten und professionellen Personenschutz für Privatpersonen, Prominente und Führungskräfte.",
      images: [img11, img10, img12],
    },
    {
      title: "OBJEKTSCHUTZ",
      description:
        "Wir schützen Ihre Objekte vor unbefugtem Zugriff und Beschädigung. Unser Objektschutz umfasst die Bewachung von Gebäuden, Anlagen und Grundstücken. Wir bieten maßgeschneiderte Sicherheitslösungen für Unternehmen und Privatpersonen.",
      images: [img7, img8, img9],
    },
    {
      title: "SICHERHEITSKONZEPTION",
      description:
        "Wir entwickeln individuelle Sicherheitskonzepte für Ihre Bedürfnisse. Unser Team analysiert Ihre spezifischen Anforderungen und erstellt umfassende Sicherheitspläne. Wir beraten Sie gerne zu allen Fragen der Sicherheit.",
      images: [img13, img15, img14],
    },
    {
      title: "SICHERHEIT FÜR FLÜCHTLINGS­UNTERKÜNFTE",
      description:
        "Wir bieten Sicherheitslösungen für Flüchtlingsunterkünfte. Unser Personal ist geschult im Umgang mit besonderen Situationen und Konflikten. Wir sorgen für eine sichere Umgebung für Bewohner und Mitarbeiter.",
      images: [img4, img5, img6],
    },
  ];

  return (
    <Parallax speed={5}>
      <section
        id="services"
        ref={servicesRef}
        className={`section ${servicesInView ? "animate-fade-in" : ""}`}
      >
        <h2>UNSERE LEISTUNGEN</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </Parallax>
  );
}
function ImageCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-carousel">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
function ServiceItem({ service, index }) {
  const { ref: itemRef, inView: itemInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={itemRef}
      className={`service-item ${
        index % 2 === 0 ? "image-left" : "image-right"
      }`}
    >
      <div
        className={`service-item-content ${
          itemInView ? "animate-text-in" : ""
        }`}
      >
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="carousel">
        <ImageCarousel images={service.images} />
      </div>
    </div>
  );
}

export default Services;
