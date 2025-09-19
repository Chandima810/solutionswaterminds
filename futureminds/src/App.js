import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Header */}
      <header>
        <div className="container header-container">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/images/logo1.png`} alt="Logo 1" className="header-logo" />
            <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="Logo 2" className="header-logo" />
            <span className="company-name">Solutions WaterMinds</span>
          </div>
          <div className="contact-info">
            <span>Email: cpg810@gmail.com</span> · <span>Phone: +94 777 181 928 / +94 716 287 419</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="container">
          <h1>Creative • Innovative • Sustainable • Climate Compliant</h1>
          <p>Creative, Innovative, Sustainable, and Climate‑Compliant Solutions for Future Minds, blooming with creativity</p>
          <p>At Solutions WaterMinds, we help organizations to build up community driven creativity and thrive through technology integration, standards compliance, inventions and innovation. Partner with us to design scalable systems, optimize operations, and upskill teams.</p>
        </div>
      </section>

      {/* My Passion Section */}
      <section id="passion" data-aos="fade-up">
        <div className="container">
          <h2>My Passion</h2>
          <p>
            I am deeply passionate about creativity, invention, innovation, and education. I strive to empower young learners and professionals to develop solutions that are both sustainable and inline with the Technology Readiness Levels. Through hands-on projects, technology integration, and mentorship, I aim to create a future-ready generation of problem-solvers.
          </p>
          <p>Young Imaginations Shape The Future</p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" data-aos="fade-up">
        <div className="container">
          <h2>Who We Are</h2>
          <p>Solutions WaterMinds is a Sri Lankan consulting and training firm specializing in solution architecture, technology integration, systems optimization, and innovation education. We align with national and international standards such as NVQ Competency and ISO 14001 to deliver trusted, future‑ready solutions.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" data-aos="fade-up">
        <div className="container">
          <h2>Vision</h2>
          <p>To be Sri Lanka’s most trusted partner for creative, innovative, sustainable, and industry‑compliant technology solutions.</p>
          <h2>Mission</h2>
          <p>We deliver customized, scalable, and efficient solutions that solve real business challenges and enhance operational performance and growth.</p>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" data-aos="fade-up">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Solution Architecture Consulting</h3>
              <p>Tailored systems to enhance efficiency, scalability, and innovation while aligning with your goals.</p>
            </div>
            <div className="card">
              <h3>Technology Integration</h3>
              <p>Seamless adoption of the latest tools with minimal disruption to operations.</p>
            </div>
            <div className="card">
              <h3>Systems Optimization</h3>
              <p>Evaluate and tune performance, security, and reliability of existing systems.</p>
            </div>
            <div className="card">
              <h3>Training & Development</h3>
              <p>Specialized NVQ/ISO-aligned training to upskill your workforce and build up community driven creative working community in Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Minds */}
      <section id="future-minds" data-aos="fade-up">
        <div className="container">
          <h2>Future Minds: NextGen Design Lab</h2>
          <h3>Young Imaginations Shape The Future</h3>
          <p>A flagship Solutions WaterMinds program that equips young learners with creativity, design thinking, and 3D modeling skills to become tomorrow’s innovators.</p>
          <ul className="bullets">
            <li>Introduces creativity concepts, innovation & design thinking (Grades 9–13 and school leavers).</li>
            <li>Hands-on with SolidWorks 2019 and solid modeling techniques.</li>
            <li>Students design a product idea, present, and learn IP basics.</li>
          </ul>
        </div>
      </section>

      {/* Company Brochure */}
      <section id="brochure" data-aos="fade-up">
        <div className="container">
          <a href={`${process.env.PUBLIC_URL}/images/brochure.pdf`} target="_blank" rel="noreferrer">
            Company Brochure
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Address: No 35/75, Dahamigama Mawatha, Palupelpita, Radawana</p>
          <p>ORCID: <a href="https://orcid.org/0009-0002-7521-9683" target="_blank" rel="noreferrer">https://orcid.org/0009-0002-7521-9683</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="fade-up">
        <div className="container">
          <p>© 2025 Solutions WaterMinds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
