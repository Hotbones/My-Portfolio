import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/01 - e commerce.gif";
import space from "../../Assets/Projects/02 - space.gif";
import bank from "../../Assets/Projects/03 - Bank.gif";
import paddle from "../../Assets/Projects/04 - paddle.png";
import recrearte from "../../Assets/Projects/05 - annie.png";
import element from "../../Assets/Projects/06 - element.jpg";
import annie from "../../Assets/Projects/07 - Annieapp.png";
import nutricion from "../../Assets/Projects/08 - nutricion.jpg";

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
              imgPath={nutricion}
              isBlog={false}
              title="Nutricion Web Site"
              description="Este proyecto apunta a la alimentacion y nutricion de las personas."
              demoLink="https://gabyaraniti.netlify.app/"
            />
        </Col>
                
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recrearte}
              isBlog={false}
              title="RecreArte Web Site"
              description="Web Site dedicada a diferentes especialidades para la salud mental y corporal."
              demoLink="https://recreart.netlify.app/"
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="4 test cases were performed on an e-commerce site in a Test environment in each browsers. 
              We used commands & fixtures as indicated by Cypress people."
              ghLink="https://github.com/Hotbones/e.commerce.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Test-Space & Beyond"
              description="Url a testear --> https://demo.testim.io/

              * Las pruebas de front-end consisten en probar o verificar la funcionalidad del front-end, la GUI y la usabilidad.
              * El objetivo principal de las pruebas de Frontend es garantizar que cada usuario esté bien protegido contra errores.
              * Crear un plan de pruebas de frontend le ayuda a conocer los dispositivos, navegadores y sistemas que su proyecto debe cubrir.
              * También le ayuda a obtener total claridad sobre el alcance del proyecto."
              ghLink="https://github.com/Hotbones/Space-Beyond.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Zero-Bank"
              description="e2e test on a bank page that successfully performs a bank transfer.

              Url a testear --> http://zero.webappsecurity.com"
              ghLink="https://github.com/Hotbones/Zero-Bank.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paddle}
              isBlog={false}
              title="Paddle Ball"
              description="Un sistema web enfocado principalmente al paddle, donde pueda elegir donde, como, cuando y con quien jugar. Diseñado para evitar que el usuario se quede sin jugar cuando lo desea. Ideal para aficionados. Eficiente y accesible para cualquier persona.."
              demoLink="https://paddle-ball.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={element}
              isBlog={false}
              title="Elements-of-Bootstrap"
              description="The project of the COINBASE page created with HTML, CSS and Bootstrap elements."
              ghLink="https://github.com/Hotbones/Elements-of-Bootstrap.git"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={annie}
              isBlog={false}
              title="Annie App"
              description="Una nueva manera de reservar y contratar tu niñera personalizada de manera online. Annie es la plataforma de contratación nueva de Argentina."
              ghLink="https://github.com/Hotbones/Annie.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
