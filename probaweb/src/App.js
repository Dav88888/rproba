import logo from './logo.svg';
import './App.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Állások</Nav.Link>
            <Nav.Link href="#link">Munka</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Rólunk</Nav.Link>
            <Nav.Link href="#link">Cégeknek</Nav.Link>
            <Nav.Link href="#link">Irodáink</Nav.Link>
            <Nav.Link href="#link">Valami mas</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
        <img
        src='https://images.pexels.com/photos/5802893/pexels-photo-5802893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        src='https://images.pexels.com/photos/16747711/pexels-photo-16747711/free-photo-of-fak-park-osz-felulnezet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        src='https://images.pexels.com/photos/8548914/pexels-photo-8548914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr/>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card >
            <Card.Img variant="top" src="https://images.pexels.com/photos/18908406/pexels-photo-18908406/free-photo-of-ut-utca-villamos-vonalak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    
  );
}

export default App;
