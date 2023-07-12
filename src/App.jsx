import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container >
      <Row >
        <Col xs lg={12} sm={8}  md={9}>
          <Home />
          {/* <h1 className="bg-primary">welcome</h1> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
