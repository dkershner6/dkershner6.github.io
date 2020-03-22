import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Navbar.Brand href="/">Derek Kershner</Navbar.Brand>
            <Navbar.Toggle id="navbar-toggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <NavDropdown id="portfolio" title="Portfolio" href="/portfolio">
                        <NavDropdown.Item href="/portfolio/codeChallenges">Code Challenges</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/portfolio/enterpriseMarketplace">Enterprise Marketplace</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio/shopifySearchEngine">Shopify Search Engine</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
