import React, { useEffect, useState } from "react";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import SmoothScroll from "smooth-scroll";
import { TbArrowBigUpLines } from "react-icons/tb";
import { validateForm } from "./utils/formValidation";


const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
  easing: "easeInOutQuad",
});

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.2,
  });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
        if (!isButtonAnimated) {
          setIsButtonAnimated(true);
        }
      } else {
        setShowScrollToTop(false);
        setIsButtonAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isButtonAnimated]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(name, email, message, setFormErrors)) {
      setFormStatus("submitting");
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        openModal();
        setFormErrors({});
        setFormStatus("success");
      }, 500);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Hero heroRef={heroRef} heroInView={heroInView} />

        <main>
          <About aboutRef={aboutRef} aboutInView={aboutInView} />
          <Services servicesRef={servicesRef} servicesInView={servicesInView} />
          <Team teamRef={teamRef} teamInView={teamInView} />
          <Contact
            contactRef={contactRef}
            contactInView={contactInView}
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            formErrors={formErrors}
            formStatus={formStatus}
          />
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  ×
                </span>
              </div>
            </div>
          )}
        </main>
        {showScrollToTop && (
          <button
            className={`scroll-to-top ${isButtonAnimated ? "show" : ""}`}
            onClick={scrollToTop}
          >
            <TbArrowBigUpLines />
          </button>
        )}

        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
