import { FaCode, FaLayerGroup, FaTools, FaCogs } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* TITLE */}
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        {/* SKILLS GRID */}
        <div className="skills-grid">

          {/* LANGUAGES */}
          <div className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <FaCode />
              </div>
              <h3>Languages</h3>
            </div>

            <div className="chip-group">
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL (MySQL)</span>
              <span>PostgreSQL</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <FaLayerGroup />
              </div>
              <h3>Frameworks & Libraries</h3>
            </div>

            <div className="chip-group">
              <span>React</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>Express.js</span>
            </div>
          </div>

          {/* CORE SKILLS */}
          <div className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <FaCogs />
              </div>
              <h3>Core Skills</h3>
            </div>

            <div className="chip-group">
              <span>Full Stack Development</span>
              <span>REST API Development</span>
              <span>Authentication (JWT)</span>
              <span>Database Design</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <FaTools />
              </div>
              <h3>Tools</h3>
            </div>

            <div className="chip-group">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Eclipse</span>
              <span>Postman</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
