import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Container>
                    <Navbar.Brand href="#home">Finances!</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Categories</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};
