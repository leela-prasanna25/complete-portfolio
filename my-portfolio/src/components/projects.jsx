import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        {/* TITLE */}
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Explore my recent work in full stack and web development
        </p>

        {/* PROJECT GRID */}
        <div className="projects-grid">

            <div className="project-card">
  <h3>Payment Integration System – Trustly</h3>

  <p>
<p>
  Built a secure payment integration system using Spring Boot with
  Trustly as the payment service provider, handling bank payments,
  transactions, and status updates.
</p>

  </p>

  <div className="tech-stack">
    <span>Spring Boot</span>
    <span>Java</span>
    <span>Trustly API</span>
    <span>REST APIs</span>
    <span>PostgreSQL</span>
    <span>Hibernate</span>
    <span>Payment Gateway</span>
  </div>

            <div className="project-footer">
              <a
                href="https://github.com/leela-prasanna25/Payment-Integration"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub /> GitHub
              </a>
            </div>
</div>

          {/* PROJECT 1 */}
          <div className="project-card">
            <h3>Online Compiler System</h3>
            <p>
              A web-based platform that allows users to write, compile, and
              execute code in multiple programming languages directly in the
              browser.
            </p>

            <div className="tech-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>React</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/leela-prasanna25/online_compiler"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <h3>E-Commerce Application</h3>
            <p>
              A full-featured e-commerce platform with product browsing, cart,
              authentication, and secure checkout functionality.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/leela-prasanna25/Ecommerce"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
