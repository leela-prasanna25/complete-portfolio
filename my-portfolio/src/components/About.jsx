import { FaGraduationCap, FaBriefcase } from "react-icons/fa";


function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* TITLE */}
        <h2 className="section-title">About Me</h2>

        {/* ABOUT TEXT */}
        <div className="about-box">
          <p className="about-text">
I’m a dedicated full-stack developer who enjoys building clean and responsive web applications. I work with both frontend and backend technologies and like turning ideas into functional products. I actively improve my skills by building projects, learning new tools, and continuously exploring better ways to enhance user experience and application performance.
          </p>
        </div>

        {/* EDUCATION & INTERNSHIP */}
        <div className="about-cards">

          {/* EDUCATION */}
          <div className="info-card">
            <div className="card-header">
              <div className="icon-box">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
            </div>

            <p className="card-title">
              Rajiv Gandhi University Of Knowledge Technologies
            </p>
            <p className="muted">Srikakulam</p>
            <p>B.Tech (Integrated PUC) – CSE</p>
            <p className="cgpa">CGPA: 9.2</p>
            <p className="muted">Aug 2019 – Apr 2025</p>

            <hr />

            <p className="card-title">ZPHS School</p>
            <p className="muted">Katrenipadu</p>
            <p>High School Education</p>
            <p className="cgpa">CGPA: 9.8</p>
            <p className="muted">2019 Passout</p>
          </div>

          {/* INTERNSHIP */}
          <div className="info-card">
            <div className="card-header">
              <div className="icon-box">
                <FaBriefcase />
              </div>
              <h3>Internship</h3>
            </div>

            <p className="card-title">
              Java Developer Intern – Vijay Software Solutions
            </p>
            <p className="muted">Aug 2024 – Present</p>
            <hr />

<ul>
  <li>Worked on backend development using Java, Spring Boot, Node.js, and Express.js</li>
  <li>Designed and developed RESTful APIs for scalable web applications</li>
  <li>Implemented CRUD operations and business logic on the server side</li>
  <li>Integrated relational databases such as MySQL and PostgreSQL</li>
  <li>Built and tested API endpoints using Express.js middleware</li>
  <li>Collaborated with frontend developers to deliver full-stack features</li>
  <li>Used Git and GitHub for version control and team collaboration</li>
</ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
