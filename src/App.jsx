import { useState, useEffect, useRef } from "react";
import "./App.css";
import missionImage from "./assets/black-nurse-their-workspace.jpg";
import ceoImg from "./assets/aline-tene.jpeg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-page">
      <section className="header-section" id="header">
        <header className="header fixed-header">
          <h1>Health Universe LLC</h1>
          <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
            ref={menuRef}
          >
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
            <a href="#mission" onClick={toggleMenu}>
              Mission
            </a>
            <a href="#vision" onClick={toggleMenu}>
              Vision
            </a>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
            <a href="#founder" onClick={toggleMenu}>
              Founder
            </a>
          </nav>
        </header>
      </section>
      <section className="about" id="about">
        <div>
          <h1>About Health Universe</h1>
        </div>
        <div className="mission-image">
          <img src={missionImage} alt="Health Universe Mission" />
        </div>
        <p className="about-text">
          At Health Universe based in Little Rock, AR, we specialize in
          comprehensive kidney care and Hypertension for adults. The exceptional
          team understands that kidney disease is complex and patients need a
          team of committed professionals to manage their health and guide them
          through treatment.
        </p>
        <p className="about-text">
          Kidney disease is a chronic condition that persist over time
          necessitating long-term medical attention. Our patients tailored care
          plans aim to:
        </p>
        <div className="vision-cards">
          <div className="vision-card">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/1.png"
              alt="1"
            />
            <h3>Disease Prevention</h3>
            <p>
              Prevent disease progression through early intervention and
              comprehensive care
            </p>
          </div>
          <div className="vision-card">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/2.png"
              alt="2"
            />
            <h3>Quality of Life</h3>
            <p>
              Enhance the patient's quality of life with personalized treatment
              plans
            </p>
          </div>
          <div className="vision-card">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/3.png"
              alt="3"
            />
            <h3>Risk Management</h3>
            <p>
              Reduce the risk of complications through proactive monitoring and
              care
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision-container">
        <section className="mission" id="mission">
          <div className="mission-content">
            <h2>Mission</h2>
            <p>
              Health Universe mission is to inspire hope and contribute to
              health and well-being by providing high quality care to every
              patient through integrated clinical practice, education and
              research.
            </p>
          </div>
        </section>

        <section className="vision" id="vision">
          <h2>Vision</h2>
          <p>
            Health Universe will reduce kidney care disparity by providing
            accessible and high quality kidney care to individuals of all
            backgrounds in the US as well as in the West and Central Africa
            through direct patient care and healthcare workers training.
          </p>
        </section>
      </section>

      <section className="services" id="services">
        <h2>Services</h2>
        <ul>
          <li>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/1D4ED8/ios-filled/50/hypertension.png"
              alt="hypertension"
            />
            Hypertension management
          </li>
          <li>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-glyph-geotatah/64/1D4ED8/external-chronic-alzheimers-disease-symbol-glyph-glyph-geotatah.png"
              alt="external-chronic-alzheimers-disease-symbol-glyph-glyph-geotatah"
            />
            Chronic kidney disease care
          </li>
          <li>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/1D4ED8/dialysis-machine.png"
              alt="dialysis-machine"
            />
            Dialysis treatment (Hemodialysis and Peritoneal dialysis)
          </li>
          <li>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/1D4ED8/training.png"
              alt="training"
            />
            Home dialysis training
          </li>
          <li>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/material-sharp/48/1D4ED8/heart-health.png"
              alt="heart-health"
            />
            Health maintenance for patients
          </li>
          <li>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/1D4ED8/50/nurse-female.png"
              alt="nurse-female"
            />
            Training for nurses and dialysis technicians
          </li>
        </ul>
      </section>

      <section className="founder" id="founder">
        <h2>Founder and CEO</h2>
        <div className="founder-card">
          <img
            className="founder-img"
            src={ceoImg}
            alt="Aline V. Lowah-Kuate"
          />
          <div className="founder-info">
            <h3>Aline V. Lowah-Kuate</h3>
            <p>Nephrology Nurse Practitioner, M.S. Ed, MSN, APRN, FNP, BC</p>
            <ul>
              <li>
                Graduate of University of Detroit Mercy and Oakland University,
                Rochester, MI
              </li>
              <li>
                Board certified of American Association of Nurse Practitioner
              </li>
              <li>Community Emergency Response Team certified</li>
              <li>Dialysis certified</li>
              <li>
                14+ years of experience in inpatient and outpatient Nephrology
                and renal replacement therapies with Henry Ford Health Systems
                (Detroit, MI), Nephrocare MDs (Dearborn, MI), Veterans
                Healthcare System (Little Rock, AR)
              </li>
              <li>Languages: French and English</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-content">
          <h3>Health Universe LLC</h3>
          <p>© 2025 Health Universe. All rights reserved.</p>
          <div className="footer-contact">
            <p>Contact us: info@healthuniverse.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
