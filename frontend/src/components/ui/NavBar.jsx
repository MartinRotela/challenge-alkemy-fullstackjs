import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        Finances!
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/categories">
                            Categories
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};
