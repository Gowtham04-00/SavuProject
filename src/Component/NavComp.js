import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './Shared/logo.png';
import { Link } from 'react-router-dom';

const NavComp = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="" className='brand'>
            <img src={logo} alt="Net Technologies" className="logo" />
            Net Technologies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home" className='link'>Home</Nav.Link>
              <NavDropdown title="Market Place" id="basic-nav-dropdown">
                <NavDropdown.Item href="#trending-courses" className='dropdown'><Link to='/StudentCard'>Trending Courses</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Aboutus" className='link'>About us</Nav.Link>
              <Nav.Link href="#Contact" className='link'>Contact us</Nav.Link>
              <Nav.Link href="#FAQ" className='link'>FAQ</Nav.Link>
              <Nav.Link href="#signup" className='link'>Sign Up</Nav.Link>
              <Nav.Link href="#login" className='link'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComp;
