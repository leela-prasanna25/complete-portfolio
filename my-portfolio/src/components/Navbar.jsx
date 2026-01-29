import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-flex">

        {/* LEFT: Avatar + Name */}
        <div className="nav-left">
          <div className="avatar">LP</div>
          <span className="nav-name">Leela Prasanna</span>
        </div>

        {/* CENTER: Navigation Links */}
        <nav className="nav-center">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT: Icons + Resume */}
        <div className="nav-right">
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

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
