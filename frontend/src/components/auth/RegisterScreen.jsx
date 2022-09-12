import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    const [values, setValues] = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Container className=" h-100">
            <Row className=" h-100 d-flex justify-content-center align-items-center">
                <Col xs={5}>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                onChange={setValues}
                            />
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={setValues}
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                onChange={setValues}
                            />
                        </Form.Group>
                        <Button type="submit" variant="dark" className="mt-2">
                            Register
                        </Button>
                    </Form>
                    <Link to="/login" className="text-reset">
                        Login
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
