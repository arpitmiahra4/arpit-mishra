import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpit Mishra </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am currently employed as a Frontend Development Team Lead at{" "}
            <span className="purple">Sentara Health</span>.
            <br />
            I have completed my Full Stack Web Development (MERN) from MASAI
            School, Remote.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arpit Mishra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
