import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shaaa from "../../Assets/Projects/shaaa.png";
import ESC from "../../Assets/Projects/ESC.jpeg";
import oz from "../../Assets/Projects/oz.png";

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
              imgPath={ESC}
              isBlog={false}
              title="ESC Association"
              description="An English Speaking Clup Association for all the latest news, activities and announcements done with Laravel and html, css, Javascript and MySql With CMS (admim panel) "
              ghLink="https://github.com/bilaldadi/Laravel8-Dernek-ilan-Duyuru-Etkinlik-Sitesi"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oz}
              isBlog={false}
              title="OZ-SHOP"
              description="This site is medical clothing brand from saudi Arabi i done this website in the CMS Salla. "
              ghLink="https://github.com/bilaldadi"
              demoLink="https://salla.sa/oz-shop.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shaaa}
              isBlog={false}
              title="Shaaa.net"
              description="This site is for Marktig agency also done by the CMS salla."
              demoLink="https://shaaa.net/"      
              ghLink="https://github.com/bilaldadi"        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
