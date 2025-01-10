import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import style from "./CookieBanner.module.scss";
import { useModal } from "../../utils/useModal";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
const CookieBanner = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    functional: false,
  });
  const [showSettings, setShowSettings] = useState(false);

  const handlePreferenceChange = (type) => {
    setCookiePreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: !prevPreferences[type],
    }));
  };
  const handleSettingsClick = () => {
    setShowSettings(true);
  };
  const handleSaveSettings = () => {
    Cookies.set("cookie_preferences", JSON.stringify(cookiePreferences), {
      expires: 365,
    });
    closeModal();
    document.body.classList.remove(style.noScroll);
  };
  const acceptAllCookies = useCallback(() => {
    Cookies.set(
      "cookie_preferences",
      JSON.stringify({
        necessary: true,
        analytics: true,
        functional: true,
      }),
      { expires: 365 }
    );
    closeModal();
    document.body.classList.remove(style.noScroll);
  }, [closeModal]);

  const declineCookies = useCallback(() => {
    Cookies.set(
      "cookie_preferences",
      JSON.stringify({
        necessary: true,
        analytics: false,
        functional: false,
      }),
      { expires: 365 }
    );
    closeModal();
    document.body.classList.remove(style.noScroll);
  }, [closeModal]);

  useEffect(() => {
    const hasPreferences = Cookies.get("cookie_preferences");
    if (!hasPreferences) {
      openModal();
      document.body.classList.add(style.noScroll);
    } else {
      setCookiePreferences(JSON.parse(hasPreferences));
      if (isModalOpen) {
        closeModal();
      }
    }
  }, []);

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      {isModalOpen && (
        <div className={style.overlay}>
          <div className={style.modal}>
            <h2>Wir verwenden Cookies</h2>
            <p>
              Wir verwenden Cookies, um den Nutzerkomfort auf unserer Website zu
              verbessern. Weitere Informationen zu den verwendeten Cookies
              können sie unserer Datenschutzerklärung entnehmen.
            </p>
            {!showSettings ? (
              <div className={style.buttons}>
                <button onClick={acceptAllCookies}>Alle akzeptieren</button>
                <button onClick={declineCookies}>Alle ablehnen</button>
                <button onClick={handleSettingsClick}>
                  Cookies einrichten
                </button>
              </div>
            ) : (
              <div>
                <div className={style.toggleButton}>
                  <label>
                    Notwendige Cookies.
                    <p>
                      Diese Cookies sind für das Funktionieren der Website
                      unbedingt erforderlich.
                    </p>
                  </label>
                  <button
                    className={`${style.toggle}`}
                    onClick={() => handlePreferenceChange("necessary")}
                  >
                    {cookiePreferences.necessary ? (
                      <BsToggleOn size={30} color="rgb(7, 193, 7)"/>
                    ) : (
                      <BsToggleOff size={30} />
                    )}
                  </button>
                </div>
                <div className={style.toggleButton}>
                  <label>
                    Analytische Cookies.
                    <p>
                      Diese Cookies helfen uns zu verstehen, wie Nutzer die
                      Website benutzen.
                    </p>
                  </label>
                  <button
                    className={`${style.toggle}`}
                    onClick={() => handlePreferenceChange("analytics")}
                  >
                    {cookiePreferences.analytics ? (
                      <BsToggleOn size={30} color="rgb(7, 193, 7)"/>
                    ) : (
                      <BsToggleOff size={30} />
                    )}
                  </button>
                </div>
                <div className={style.toggleButton}>
                  <label>
                    Funktionale Cookies.
                    <p>
                      Diese Cookies helfen uns, die Nutzererfahrung auf der
                      Website zu verbessern.
                    </p>
                  </label>
                  <button
                    className={`${style.toggle}`}
                    onClick={() => handlePreferenceChange("functional")}
                  >
                    {cookiePreferences.functional ? (
                      <BsToggleOn size={30} color="rgb(7, 193, 7)"/>
                    ) : (
                      <BsToggleOff size={30} />
                    )}
                  </button>
                </div>
                <div className={style.buttons}>
                  <button onClick={handleSaveSettings}>
                    Einstellungen speichern
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
