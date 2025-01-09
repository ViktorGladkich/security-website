import { useRef, forwardRef, useMemo } from "react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "../components/Services.module.scss";
import { services } from "../components/carousel/servicesData";
import CarouselImage from "../components/carousel/CarouselImage";
import useCarouselSlide from "../components/carousel/useCarouselSlide";

const Services = forwardRef((props, ref) => {
  const servicesRef = useRef(null);

  return (
    <Parallax speed={5}>
      <section
        id="services"
        ref={(el) => {
          servicesRef.current = el;
          if (ref) ref.current = el;
        }}
        className={style.section}
      >
        <h2>UNSERE LEISTUNGEN</h2>
        <div className={style["services-list"]}>
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </Parallax>
  );
});

function ImageCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useCarouselSlide(images);
  const carouselRef = useRef(null);

  return (
    <div className={style["image-carousel"]}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <CarouselImage key={index} image={image} index={index} />
        ))}
      </Carousel>
    </div>
  );
}

function ServiceItem({ service, index }) {
  const { ref: itemRef, inView } = useInView({ threshold: 0.4 });

  const descriptionAnimationClass = useMemo(
    () =>
      index % 2 === 0
        ? style["animate-description-from-left"]
        : style["animate-description-from-right"],
    [index]
  );
  const carouselAnimationClass = useMemo(
    () =>
      index % 2 === 0
        ? style["animate-carousel-from-right"]
        : style["animate-carousel-from-left"],
    [index]
  );

  return (
    <div
      ref={itemRef}
      className={`${style["service-item"]} ${
        index % 2 === 0 ? style["image-left"] : style["image-right"]
      }`}
    >
      <div
        className={`${style["service-item-content"]} ${
          inView ? descriptionAnimationClass : ""
        }`}
      >
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div
        className={`${style.carousel} ${inView ? carouselAnimationClass : ""}`}
      >
        <ImageCarousel images={service.images} />
      </div>
    </div>
  );
}

export default Services;
