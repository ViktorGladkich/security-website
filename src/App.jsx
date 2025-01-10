import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import style from "./App.module.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useModal } from "./utils/useModal";
import { scrollToTop as scrollToTopUtil } from "./utils/scrollToTop";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import Datenschutz from "./components/rechtliches/Datenschutz";
import Impressum from "./components/rechtliches/Impressum";
import { handleScroll } from "./utils/handleScroll";
import Referenzen from "./components/Referenzen";
import { AiOutlineClose } from "react-icons/ai";
import CookieBanner from "./components/cookie/CookieBanner";
import Cookies from "js-cookie";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  const [cookieConsent, setCookieConsent] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const referenzenRef = useRef(null);

  const sectionsRef = useRef({
    about: aboutRef,
    services: servicesRef,
    team: teamRef,
    referenzen: referenzenRef,
    contact: contactRef,
  });

  useLayoutEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    if (location.hash) {
      const targetElementId = location.hash.substring(1);
      const element = sectionsRef.current[targetElementId];
      if (element && element.current) {
        element.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, sectionsRef, isInitialRender]);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(setShowScrollToTop, setIsButtonAnimated);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const scrollToTop = () => {
    scrollToTopUtil();
  };

  useEffect(() => {
    const hasConsent = Cookies.get("cookie_consent");
    if (hasConsent) {
      setCookieConsent(true);
    }
  }, []);
  return (
    <>
      <CookieBanner />
      <ParallaxProvider>
        <div className={style.App}>
          <Header ref={headerRef} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route
                index
                element={
                  <>
                    <Hero />
                    <main className={style.main}>
                      <About ref={aboutRef} />
                      <Services ref={servicesRef} />
                      <Team ref={teamRef} />
                      <Referenzen ref={referenzenRef} />
                      <Contact openModal={openModal} ref={contactRef} />
                      {isModalOpen && (
                        <div className={style.modal}>
                          <div className={style["modal-content"]}>
                            <button
                              className={style.close}
                              onClick={closeModal}
                            >
                              <AiOutlineClose />
                            </button>
                            <p>Das Formular wurde erfolgreich übermittelt!</p>
                          </div>
                        </div>
                      )}
                    </main>
                    {showScrollToTop && (
                      <button
                        className={`${style["scroll-to-top"]} ${
                          isButtonAnimated ? style.show : ""
                        }`}
                        onClick={scrollToTop}
                      >
                        <TbArrowBigUpLines />
                      </button>
                    )}
                  </>
                }
              />
              <Route path="impressum" element={<Impressum />} />
              <Route path="datenschutz" element={<Datenschutz />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
