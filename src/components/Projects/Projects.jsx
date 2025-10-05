import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import umbrella from "../../Assets/Projects/umberrela.png";
import employee from "../../Assets/Projects/employ.png";
import nyka from "../../Assets/Projects/Nykka.png";
import editor from "../../Assets/Projects/codeEditor.png";
import flipkart from "../../Assets/Projects/flipkart.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipkart}
              isBlog={false}
              title="Flipkart"
              description="Engineered a scalable Flipkart-inspired e-commerce platform leveraging the MERN stack (React.js, Redux, Node.js, Express.js, MongoDB) with Paytm integration and a custom admin panel, optimized for performance, maintainability, and enhanced user experience."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BytezOfCode"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EditBox.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyka}
              isBlog={false}
              title="Nykaa"
              description="Collaborated on developing a Nykaa-inspired e-commerce platform using MERN stack (JavaScript, React.js, Chakra UI, Node.js, MongoDB Atlas), delivering a fully responsive interface, smooth UI/UX, seamless frontend–backend integration, and an admin panel for efficient management."
              ghLink="https://github.com/arpitmiahra4/Nykaa-Clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Management System"
              description="Developed an Employee Management System with full CRUD functionality using React.js, JavaScript, and CSS, enabling efficient tracking and management of employee details."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umbrella}
              isBlog={false}
              title="Customize Umbrella"
              description="Built a web-based customization tool using JavaScript, HTML, and CSS that enables customers to upload logos and generate instant umbrella previews for branding purposes."
              ghLink="https://github.com/arpitmiahra4/studio"
              demoLink="https://arpitstarapps.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
