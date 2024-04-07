import React from "react";
import "./App.css";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("summary")}
                  style={{ cursor: "pointer" }}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("skills")}
                  style={{ cursor: "pointer" }}
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => scrollToSection("experience")}
                  style={{ cursor: "pointer" }}
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("projects")}
                  style={{ cursor: "pointer" }}
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("education")}
                  style={{ cursor: "pointer" }}
                >
                  EDUCATION
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "60px" }}>
        <h1 className="mb-1">Hiten Gupta</h1>
        <p className="mb-4">Fullstack Developer at SourceFuse</p>
        <section id="summary" className="mb-4">
          <h2>Summary</h2>
          <p>
            Experienced Software Engineer with expertise in Angular, React,
            Node.js, Express, and LoopBack4. 2+ years in full-stack web
            development, skilled in creating dynamic, scalable, and responsive
            applications. A strong advocate of agile methodologies, test-driven
            practices, and user-centered solutions.
          </p>
        </section>
        <section id="skills" className="mb-4">
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Languages and Frameworks</strong>: HTML5, CSS3,
              JavaScript(ES6+), TypeScript, ReactJs with Redux, NodeJs, Camunda,
              ExpressJs, Loopback4, Angular.
            </li>
            <li>
              <strong>Databases</strong>: MongoDb, PostgreSQL, Redis
            </li>
            <li>
              <strong>Tools</strong>: Git, Github
            </li>
            <li>
              <strong>Others</strong>: Design Patterns, RestAPI, Unit Testing,
              Redis, Docker
            </li>
          </ul>
        </section>
        <section id="experience" className="mb-4">
          <h2>Work Experience</h2>
          <div className="experience-item mb-4">
            <h3>
              Junior Engineer Web Apps, SourceFuse Technologies Private Limited
            </h3>
            <p>July 2022-Present</p>
            <h4>Biz-Book</h4>
            <ul>
              <li>
                Developed an ERP platform for SourceFuse’s resource planning,
                with future expansion to diverse clients.
              </li>
              <li>
                Spearheaded a Proof of Concept integrating Apache Kafka with
                Loopback4, reducing latency between microservices.
              </li>
              <li>
                Integrated seamlessly with top CRM systems (HubSpot) and HRMS
                platforms (PeopleStrong).
              </li>
              <li>
                Implemented webhooks for seamless deal request capture from
                Hubspot and storage in respective databases.
              </li>
              <li>
                Conducted training sessions for team members on agile
                methodologies, grooming techniques, and effective use of Jira,
                improving the team’s efficiency and overall project delivery.
              </li>
              <li>
                Played a pivotal role in optimizing deployment processes,
                reducing deployment time, and minimizing post-deployment issues,
                leading to higher client satisfaction.
              </li>
            </ul>
            <h4>Rakuten Sales Digitisation</h4>
            <ul>
              <li>
                Developed a tailored CRM tool for Rakuten, named Sales
                Digitization, aligning with its distinct business landscape.
              </li>
              <li>
                Developed PostgreSQL migration scripts for project creation,
                enhancing project management capabilities.
              </li>
              <li>
                Empowered Rakuten stakeholders and authorities to efficiently
                manage and track real-world opportunities.
              </li>
              <li>
                Provided a 360-degree view of the complete CRM lifecycle,
                commencing from initial opportunity capture and spanning to
                potential deal closure as future business prospects.
              </li>
              <li>
                Conducted training sessions for team members on agile
                methodologies, grooming techniques, and effective use of Jira,
                improving the team’s efficiency and overall project delivery.
              </li>
              <li>
                Played a pivotal role in optimizing deployment processes,
                reducing deployment time, and minimizing post-deployment issues,
                leading to higher client satisfaction.
              </li>
            </ul>
          </div>
          <div className="experience-item mb-4">
            <h3>Trainee Web Apps, SourceFuse Technologies Private Limited</h3>
            <p>January 2022-June 2022</p>
            <ul>
              <li>
                Developed a feature-rich chat application with a micro-services
                architecture, encompassing robust chat and advanced
                notifications.
              </li>
              <li>
                Demonstrated technical skills, innovation, and a user-centric
                approach in the project.
              </li>
              <li>
                Technologies Used: Angular, Loopback4, PostgreSQl, google OAuth
              </li>
            </ul>
          </div>
        </section>
        <section id="projects" className="mb-4">
          <h2>Personal Projects</h2>
          <div className="project-item mb-4">
            <h3>Portal for College placement Cell (Hire Me)</h3>
            <p>
              Build a portal for college placement cells which helps students to
              register for companies And helps college to filter out the best
              students for the companies. Students have to register one time
              only instead of filling out forms multiple times.
            </p>
          </div>
          <div className="project-item mb-4">
            <h3>Daily Dose</h3>
            <p>
              Developed a feature-rich News application which provides daily
              latest News Technologies Used: React
            </p>
          </div>
          <div className="project-item">
            <h3>INotebook</h3>
            <p>
              Developed a feature-rich Notebook application which provides User
              to add personalized notes Added login/signup page for Tenant
              specific approach and allows user to perform CRUD on it’s own
              Notes User creds are fully encrypted Technologies Used: React,
              MongoDb, Express, Nodejs
            </p>
          </div>
        </section>
        <section id="education" className="mb-4">
          <h2>Education and Professional Qualifications</h2>
          <p>
            B.Tech, Computer Science and Engineering, Thapar University, Patiala
            (August 2018- June 2022).
          </p>
        </section>

        <p className="mb-4">
          <a
            href="mailto:guptahiten7.hg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/hiten-gupta-0a3751169"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
