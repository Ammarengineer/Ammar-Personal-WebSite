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
import { render } from "react-dom";
import { motion } from "framer-motion";

function RightSideBar() {
    const education = [
        {
            title: 'Mechanical Engineering',
            period: '08.2008 - 10.2013',
            details: "I graduated for Sana'a University as a Mechanical Engineer and I have bachelor degree in Mechanical Engineering"
        },

        {
            title: 'IELTS',
            period: '06.2018',
            details: "I have IELTS Academic Certificate"
        },

        {
            title: 'ETS',
            period: '05.2015',
            details: "I have IBT TOEFL Certificate"
        },
        {
            title: 'Python',
            period: '01.2017',
            details: "I have taken Online Courses in python"
        },

        {
            title: 'Django',
            period: '1.2018',
            details: "I have taken Online Courses in Django"
        },

        {
            title: 'React js',
            period: '01.2020',
            details: "I have taken Online Courses in React js"
        },

        {
          title: 'React Native',
          period: '01.2021',
          details: "I have taken Online Courses in React js"
      },

        {
            title: 'Javascript',
            period: ' 01.2019',
            details: "I have taken Online Courses in Javascript"
        },

        {
            title: 'HTML',
            period: '01.2019',
            details: "I have taken Online Courses in HTML"
        },

        {
            title: 'CSS',
            period: '01.2019',
            details: "I have taken Online Courses in CSS"
        },

        {
          title: 'flutter',
          period: '01.2020',
          details: "I have taken Online Courses in Flutter"
      },

        {
            title: 'Adobe PhotoShop',
            period: '01.2020',
            details: "I have taken Online Courses in Adobe PhotoShop"
        },
        {
            title: 'Adobe illustrator',
            period: '10.2022',
            details: "I have taken Online Courses in Adobe illustrator"
        },
        {
            title: 'OBS',
            period: '01.2020',
            details: "I have taken Online Courses in OBS"
        },
    ]
  const workExperiences = [
    {
      title: "Django Developer Freelancer",
      period: "01.2019 - present",
      details:
        "As Python and Django developer I have been making making servers , Restful APIs for the apps I make with React Native , Flutter or React js",
    },
    {
      title: "Python Developer Freelancer",
      period: "01.2018 - present",
      details:
        "As Python  developer I have been making making lots of programs for Data analysis ,by using python pandas library , fetching info from different websites using scrapy python",
    },

    {
      title: "React js developer Freelancer",
      period: "6.2020 - present",
      details:
        "As a React js developer I have been making website and connect them to my backend APIs that I made with Django , like Blogs , markets, etc",
    },
    {
      title: "React Native developer Freelancer",
      period: "6.2021 - present",
      details:
        "As a React Native developer , I have been making apps for customers, like markets, Blogs, IOTs apps for controlling electrical machines, etc",
    },
    {
      title: "Flutter developer Freelancer",
      period: "7.2021 - present",
      details:
        "As a Flutter developer , I have been making apps for customers, like markets, Blogs, IOTs apps for controlling electrical machines, etc",
    },
    {
      title: "Public Works and Projects Sector as Project Assistant",
      period: "10.2016 - 06.2018",
      details:
        "As Python and Django developer I have been making making servers , Restful APIs for the apps I make with React Native , Flutter or React js",
    },
    {
      title: "IOTs as Hardware and Control Systems Designer Freelance",
      period: "1.2020 - present",
      details:
        "I have been making IOTs devices for controlling electrical machines in factories, home devices etc",
    },

    {
      title: "Agarea Company (Australia) as Full Stack Developer",
      period: "04.2022 - 06.2023",
      details:
        "I worked remotely as front-end and back-end developed designing the website as front-end developer with react js and designing the back-end with Django rest framework.",
    },

    {
      title: "SolidWorks Freelancer",
      period: "04.2018 - 06.2023",
      details:
        "I have been designing mechanical machines like production lines,ventilation machine for medical use,3D printers, CNC, and controller them with React js website , React Native app or Flutter app that are connected to my backend that is written with Django",
    },
  ];

  return (
    <Col xs={10}  md={10} xl lg={10} >
      
      <Row >
      

        <Card  
        // style={{ width: "380px" }}
        className=" shadow p-0 m-0 bg-body rounded">
          <Card.Body>
            <Card.Title>
              {" "}
              <div className="text-start">
                <i className="bi bi-briefcase-fill text-muted fs-4">
                  {"  "} Work Experience
                </i>
              </div>
            </Card.Title>

            <ListGroup>
              {workExperiences.map((item, index) => (
                <ListGroup.Item key={index}>
                  <p className="fs-4 text-muted text-start">{item.title}</p>
                  <div className="text-start">
                    <i className="bi bi-calendar3 text-muted fs-5 fst-normal ">
                      {" "}
                      {item.period}
                    </i>
                  </div>
                  <p className="fs-6 text-success text-start mt-2">
                    {item.details}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
        
      </Row>
     

      <Row >
     
      
        <Card 
        // style={{ width: "500px" }} 
        className="p-0 shadow p-0 mb-0 bg-body rounded">
          <Card.Body>
            <Card.Title>
              {" "}
              <div className="text-start">
                <i className="bi bi-briefcase-fill text-muted fs-4">
                  {"  "} Education
                </i>
              </div>
            </Card.Title>

            <ListGroup>
              {education.map((item, index) => (
                <ListGroup.Item key={index}>
                  <p className="fs-4 text-muted text-start">{item.title}</p>
                  <div className="text-start">
                    <i className="bi bi-calendar3 text-muted fs-5 fst-normal ">
                      {" "}
                      {item.period}
                    </i>
                  </div>
                  <p className="fs-6 text-success text-start mt-2">
                    {item.details}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  );
}

export default RightSideBar;
