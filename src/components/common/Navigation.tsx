import React, { ReactElement } from 'react';

import { Nav, Navbar } from 'react-bootstrap';

const Navigation = (): ReactElement => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Navbar.Brand href="/">Derek Kershner</Navbar.Brand>
            <Navbar.Toggle
                id="navbar-toggle"
                aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="mr-auto">
                    <Nav.Link href="/#projects">Projects</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
