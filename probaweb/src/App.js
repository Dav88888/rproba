import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Card, Container,CardGroup } from 'react-bootstrap';
import { NavDropdown,Nav,Navbar } from 'react-bootstrap';


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
    <CardGroup>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
        <Card style={{ width: '11rem',height:'18rem', backgroundColor: '#00b26b',borderRadius: '0', marginBottom: '20px'}}>
          <Card.Title>Card title</Card.Title>
        <p>asfafssa</p>
          {/* Kártya tartalma */}
        </Card>
    </CardGroup>
    <footer>
      <Navbar bg="dark" variant="dark" >
        <Nav className="w-100 justify-content-end" style={{backgroundcolor: '#1A1F37'}}> 
          <Nav.Link href="#home">Kezdőlap</Nav.Link>
          <h5>|</h5>
          <Nav.Link href="#about">Rólunk</Nav.Link>
          <h5>|</h5>
          <Nav.Link href="#contact">Kapcsolat</Nav.Link>
        </Nav>
      </Navbar>
      <div className="text-center">
        <p>Ez itt a lábléc tartalma.</p>
      </div>
    </footer>
    </Container>
    
  );
}

export default App;
