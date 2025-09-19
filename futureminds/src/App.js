import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

// Import assets
import logo from "./assets/logo.png";
import future from "./assets/future.png";
import standards from "./assets/standards.png";
import innovation from "./assets/innovation.png";
import contact from "./assets/contact.png";
import brochure from "./assets/brochure.pdf";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax background effect
  const parallaxStyle = {
    backgroundPositionY: `${scrollY * 0.4}px`,
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Company Logo" className="header-logo" />
            <span className="company-name">Neat Solutions</span>
          </div>
          <div className="contact-info">
            <p>Email: info@neatsolutions.com | Phone: +94 77 123 4567</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={parallaxStyle}>
        <div data-aos="fade-up">
          <h1>Welcome to Neat Solutions</h1>
          <p>
            Empowering communities through innovation, resilience, and
            sustainable solutions.
          </p>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="gradient-section-1">
        <div className="container" data-aos="fade-up">
          <h2>
            <img src={future} alt="Future Icon" className="header-logo" /> Our
            Vision for the Future
          </h2>
          <p>
            We are committed to building adaptive, climate-responsive, and
            community-driven innovations for tomorrow.
          </p>
        </div>
      </section>

      {/* Standards Section */}
      <section className="gradient-section-2">
        <div className="container" data-aos="fade-up">
          <h2>
            <img src={standards} alt="Standards Icon" className="header-logo" />{" "}
            Global Standards
          </h2>
          <p>
            Our solutions align with international frameworks, ensuring
            excellence and reliability.
          </p>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="gradient-section-1">
        <div className="container" data-aos="fade-up">
          <h2>
            <img
              src={innovation}
              alt="Innovation Icon"
              className="header-logo"
            />{" "}
            Innovation at the Core
          </h2>
          <p>
            We harness the latest technologies to create scalable, impactful,
            and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Brochure Section */}
      <section id="brochure" className="gradient-section-2">
        <div className="container" data-aos="fade-up">
          <h2>Download Our Brochure</h2>
          <a href={brochure} download="NeatSolutions-Brochure.pdf">
            📄 Download Brochure
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="gradient-section-1">
        <div className="container" data-aos="fade-up">
          <h2>
            <img src={contact} alt="Contact Icon" className="header-logo" />{" "}
            Get in Touch
          </h2>
          <p>Email us at info@neatsolutions.com or call +94 77 123 4567</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Neat Solutions. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
