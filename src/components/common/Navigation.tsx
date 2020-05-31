import React, { ReactElement } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="https://github.dkershner.com">
                        Manual GitHub Actions
                    </Nav.Link>
                    <NavDropdown
                        id="githubActions"
                        title="Custom GitHub Actions"
                    >
                        <NavDropdown.Item href="https://github.com/marketplace/actions/gitignore-parser">
                            GitIgnore Parser
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
