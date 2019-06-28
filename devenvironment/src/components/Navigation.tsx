import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>DKershner.com</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle id="navbar-toggle" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <NavDropdown id="portfolio" title="Portfolio">
            <NavDropdown.Item href="/portfolio/enterpriseMarketplace">
              Enterprise Marketplace
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
