import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (<div>
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className= "navItems" id="responsive-navbar-nav">
          <Nav className='items'>
            <Nav.Link id="home" href="#home">Home</Nav.Link>
            <Nav.Link href="#about">
              About
            </Nav.Link>
            <Nav.Link href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;