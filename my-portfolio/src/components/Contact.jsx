import { FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        {/* TITLE */}
        <h2 className="section-title center">Get In Touch</h2>
        <p className="section-subtitle center">
          Feel free to reach out for opportunities or collaborations
        </p>

        {/* CONTACT CARD */}
        <div className="contact-wrapper">

          {/* LEFT */}
          <div className="contact-left">
            <h3>Contact Information</h3>

            <p className="contact-email">
              <FiMail />
              leelaprasannamutyala@gmail.com
            </p>

            <h4>Social Links</h4>

            <div className="contact-icons">
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
                href="https://leetcode.com/u/prasannamuthyala/"
                target="_blank"
                rel="noreferrer"
                title="LeetCode"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-right">
            <h3>Download Resume</h3>
            <p>
              Get a copy of my complete resume with detailed experience and
              skills.
            </p>

            <a
              href="/Leelaprasanna_mutyala.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-download"
            >
              <FiDownload />
              Download Resume (PDF)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
