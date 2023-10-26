import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matias Cañadas </span>
            from <span className="purple"> Mendoza, Argentina.</span>
            <br /> I am a fan of technology, teamwork and Agile Methodologies.
            <br />
            Additionally, I am currently employed as a Tester QA at QArmy.
            <br />
            <br />
            Apart from quality assurance, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Go to running
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mr. Bones</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
