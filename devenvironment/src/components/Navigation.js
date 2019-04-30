import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <Navbar bg='primary' variant='dark' collapseOnSelect expand='lg'>
      <LinkContainer to='/'>
        <Navbar.Brand>DKershner.com</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <NavLink to='/#about'>
            <Nav.Link>About</Nav.Link>
          </NavLink>
          <NavLink to='/#portfolio'>
            <Nav.Link>Portfolio</Nav.Link>
          </NavLink>
          <LinkContainer to='/blog'>
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
