import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ammar_image from "../assets/ammar_image.jpg";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import LiftSideBar from "../components/LiftSideBar";
import RightSideBar from "../components/RightSideBar";

function Home() {
  return (
    <div data-bs-theme="light" >
      <Container fluid>
        <Row>
            <LiftSideBar/>
          

          <RightSideBar/>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
