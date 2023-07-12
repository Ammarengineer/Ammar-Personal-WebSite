import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ammar_image from "../assets/ammar_image.jpg";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

function LiftSideBar() {
  const [basicInfo, setBasicInfo] = useState([
    "Engineer",
    "Yemen, Sana'a",
    "ammaralarashi.engineer@gmail.com",
    "+967775318453",
  ]);
  const skills = [
    { skill: "Python", percent: "100" },
    { skill: "Django Rest Framework", percent: "100" },
    { skill: "React JS", percent: "100" },
    { skill: "React Native", percent: "100" },
    { skill: "Flutter", percent: "100" },
    { skill: "Javascript", percent: "100" },
    { skill: "HTML", percent: "100", id: 7 },
    { skill: "BootStrap5", percent: "100" },
    { skill: "CSS", percent: "100", id: 9 },
    { skill: "Python Pandas", percent: "90" },
    { skill: "Python Geo Pandas", percent: "90" },
    { skill: "Python Numpy", percent: "90" },
    { skill: "Python Scrapy", percent: "90" },
    { skill: "SolidWorks", percent: "100" },
    { skill: "Adobe PhotoShop", percent: "80" },
    { skill: "Adobe illustrator", percent: "80" },
    { skill: "OBS", percent: "75" },
  ];
  const languages = ["English", "Arabic"];
  return (
    <Col xs sm lg >
      <Card
        style={{ width: "300px" }}
        className=" shadow p-0 m-0  rounded"
      >
        <Card.Img src={ammar_image} />
        <Card.Body>
          <Card.Title>
            <i className="bi bi-person text-muted fs-4 p-1">
              {" "}
              Ammar AbdulWahab AL-Arashi
            </i>
          </Card.Title>

          <ListGroup>
            <ListGroup.Item>
              {basicInfo.map((item, index) => (
                <div key={index}>
                  <i className="mb-5 bi bi-briefcase-fill text-muted fs-5 fst-normal">
                    {" "}
                    {item}
                  </i>
                  <br />
                  <br />
                </div>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="bi bi-asterisk text-muted fs-5 text-start">
                Skills
              </i>
              {skills.map((item, index) => (
                <div key={index} className="mb-3">
                  <div>
                    <h5 className="text-muted text-start m-1">{item.skill}</h5>
                    <ProgressBar
                      variant="secondary"
                      now={item.percent}
                      label={`${item.percent}%`}
                    />
                  </div>
                </div>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="text-start">
                <i className="bi bi-translate text-muted fs-5 text-start">
                  {" "}
                  Languages
                </i>
              </div>
              {languages.map((item, index) => (
                <div key={index} className="mb-3">
                  <h5 className="text-secondary text-start">{item}</h5>
                  <ProgressBar
                    variant="secondary"
                    now={100}
                    label={`${item}%`}
                    visuallyHidden
                  />
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default LiftSideBar;
