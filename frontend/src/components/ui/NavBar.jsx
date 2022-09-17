import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const { name } = useSelector((state) => state.auth);
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
                    <Navbar.Text>{name}</Navbar.Text>
                </Container>
            </Navbar>
            <br />
        </>
    );
};
