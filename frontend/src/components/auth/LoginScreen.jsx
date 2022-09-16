import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../store/slices/auth/thunks';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useForm();
    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;
        dispatch(startLogin(email, password));
    };
    return (
        <Container className=" h-100">
            <Row className=" h-100 d-flex justify-content-center align-items-center">
                <Col xs={5}>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={setValues}
                                value={values.email}
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                onChange={setValues}
                                value={values.password}
                            />
                        </Form.Group>
                        <Button type="submit" variant="dark" className="mt-2">
                            Login
                        </Button>
                    </Form>
                    <Link to="/register" className="text-reset">
                        Register
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
