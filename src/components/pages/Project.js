import React from "react";
import "../styles/style.css";
import { Container, Col, Row, Image} from "react-bootstrap";
// import "../ProjectData";

const Project = () => (
    <Container id="portfolio" className="container">
            <Row className="row">
                <div className="col-sm-12">
                <Col>
                    <section>
                        <h1 style={{ fontSize: 75 }}>Portfolio</h1>
                    </section>
                </Col>  
                </div>
            </Row>
            
            <div class="container">
        <div class="row">
          <h2>My Work</h2>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="card">
            <Image
              src="./images/adoption_connection.jpg"
              class="card-Image-top"
              alt="adoption_connection"
            />
            <div class="card-body">
              <h5 class="card-title">Project 1</h5>
              <p class="card-text">
                Adoption connection is a group project where we help by connecting you with your potential furry friend.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="https://github.com/rEEEEEahn/adoption-connection" class="card-link"
                ><li class="list-group-item ghbutton">
                  <i class="fab fa-github"></i></li
              ></a>
              <a href=" https://reeeeeahn.github.io/adoption-connection/" class="card-link"
                ><li class="list-group-item linkButton">
                  <i class="fas fa-link"></i></li
              ></a>
            </ul>
          </div>

          <div class="card">
            <Image
              src="./images/weather_dashboard1.jpg"
              class="card-Image-top"
              alt="weather_dashboard1"
            />
            <div class="card-body">
              <h5 class="card-title">Weather Dashboard</h5>
              <p class="card-text">
                An application to view a cities 5 day forecast.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="https://github.com/jmoniz155/weather-application" class="card-link"
                ><li class="list-group-item ghbutton">
                  <i class="fab fa-github"></i></li
              ></a>
              <a href=" https://jmoniz155.github.io/weather-application/" class="card-link"
                ><li class="list-group-item linkButton">
                  <i class="fas fa-link"></i></li
              ></a>
            </ul>
          </div>

          <div class="card">
            <Image
              src="./images/coding_brain.jpg"
              class="card-Image-top"
              alt="coding_brain"
            />
            <div class="card-body">
              <h5 class="card-title">Coding Quiz</h5>
              <p class="card-text">
               A coding quiz that ask's multiple choice questions, is timed and saves your scores. 
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <a href=" https://github.com/jmoniz155/code-quiz" class="card-link"
                ><li class="list-group-item ghbutton">
                  <i class="fab fa-github"></i></li
              ></a>
              <a href="https://jmoniz155.github.io/code-quiz/" class="card-link"
                ><li class="list-group-item linkButton">
                  <i class="fas fa-link"></i></li
              ></a>
            </ul>
          </div>

          <div class="card">
            <Image
              src="./images/trip journal.jpg"
              class="card-Image-top"
              alt="coding_brain"
            />
            <div class="card-body">
              <h5 class="card-title">Project 2</h5>
              <p class="card-text">
               My-Trip-Journal is backend application using an API key to retrieve and display data on the front end.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="https://github.com/jmoniz155/my-trip-journal" class="card-link"
                ><li class="list-group-item ghbutton">
                  <i class="fab fa-github"></i></li
              ></a>
              <a href="https://my-trip-journal2.herokuapp.com/" class="card-link"
                ><li class="list-group-item linkButton">
                  <i class="fas fa-link"></i></li
              ></a>
            </ul>
          </div>

          <div class="card">
            <Image
              src="./images/readme.md.jpg"
              class="card-Image-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">ReadMe Generator</h5>
              <p class="card-text">
                A Node.js application that a user can generate a README.md file by answering the prompts.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="https://github.com/jmoniz155/professional-readme-generator" class="card-link"
                ><li class="list-group-item ghbutton">
                  <i class="fab fa-github"></i></li
              ></a>
              <a href="https://watch.screencastify.com/v/h3ZvBeNdwnW2gweBQcwz" class="card-link"
                ><li class="list-group-item linkButton">
                  <i class="fas fa-link"></i></li
              ></a>
            </ul>
          </div>

          <div class="card">
            <Image
              src="./images/ORM.jpg"
              class="card-Image-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Object Relational Mapping</h5>
              <p class="card-text">
                E commerce application built using the backend, allowing a retail company to quickly access and modify their store data base.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <a href="https://github.com/jmoniz155/object-relational-mapping-" class="card-link"
                ><li class="list-group-item ghbutton">
                  <i class="fab fa-github"></i></li
              ></a>
              <a href="https://dashboard.heroku.com/apps/orm-deploy-jm155" class="card-link"
                ><li class="list-group-item linkButton">
                  <i class="fas fa-link"></i></li
              ></a>
            </ul>
          </div>
        </div>
      </div>
        </Container>
    ); 

export default Project;