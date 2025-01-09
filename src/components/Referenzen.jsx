import { useRef, forwardRef, useMemo, useEffect, useState } from "react";
import style from "../components/Referenzen.module.scss";
import { Parallax } from "react-scroll-parallax";
import InfiniteScroll from "../components/infiniteReferenzen/InfiniteScroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../images/referenzen/logo_mma.jpg";
import slide2 from "../images/referenzen/logo_edeka.webp";
import slide3 from "../images/referenzen/logo_dd.svg";
import slide4 from "../images/referenzen/logo_tu.jpg";

const Referenzen = forwardRef((props, ref) => {
  const referenzenRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (referenzenRef.current) {
      observer.observe(referenzenRef.current);
    }

    return () => {
      if (referenzenRef.current) {
        observer.unobserve(referenzenRef.current);
      }
    };
  }, []);

  const animationClass = useMemo(
    () => (isVisible ? style["animate-fade-in"] : ""),
    [isVisible]
  );

  return (
    <Parallax speed={5}>
      <section
        id="referenzen"
        ref={(el) => {
          referenzenRef.current = el;
          if (ref) ref.current = el;
        }}
        className={`${style.section} ${animationClass}`}
      >
        <h2>REFERENZEN</h2>
        <div className={style.carousel}>
          <InfiniteScroll images={[slide1, slide2, slide3, slide4]} />
        </div>
      </section>
    </Parallax>
  );
});

export default Referenzen;
