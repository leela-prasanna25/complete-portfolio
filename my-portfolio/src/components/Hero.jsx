import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImg from "../assets/profile.jpg";


function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">

        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Leela Prasanna</span>
          </h1>

          <h3>Full Stack Developer</h3>

          <p>
            Passionate about building clean, scalable web applications using
            modern frontend and backend technologies.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects →
            </a>

            <a
              href="/Leela prasanna_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Download Resume
            </a>
          </div>

          {/* ICONS */}
          <div className="hero-icons">
            <a
              href="https://leetcode.com/u/prasannamuthyala/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://github.com/leela-prasanna25"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/leela-prasanna-mutyala-58862924b/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:leelaprasannamutyala@gmail.com"
              title="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={profileImg} alt="Leela Prasanna" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
