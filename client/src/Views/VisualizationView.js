import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const VisualizationView = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav.Link>Bubble Sort</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <Container>Sorting component</Container>
    </div>
  );
};

export default VisualizationView;
