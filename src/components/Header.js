import React from 'react'
import { Button, Col, Container, InputGroup, Nav, Navbar, Row } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
                                    <Container>

                                        <Navbar.Brand href="#home">SHOP FASHION</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <Nav className="me-auto">
                                                <Nav.Link href="#home">Home</Nav.Link>
                                                <Nav.Link href="#aboutUs">Products</Nav.Link>
                                                <Nav.Link href="#contact">Men</Nav.Link>
                                                <Nav.Link href="#contact">Women</Nav.Link>
                                                <Nav.Link href="#contact">Contact</Nav.Link>
                                                <Button variant="outline-success"><InputGroup.Text id="btnGroupAddon">@</InputGroup.Text></Button>
                                                <Nav.Link href="#contact">Cart (0)</Nav.Link>
                                            </Nav>

                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Header
