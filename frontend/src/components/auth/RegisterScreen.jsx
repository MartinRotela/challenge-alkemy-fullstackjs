import { useMemo } from 'react';
import { Container, Row, Form, Button, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../store/slices/auth/thunks';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { errorMessage, isLoading } = useSelector((state) => state.auth);
    const [values, setValues] = useForm();
    const isChecking = useMemo(() => isLoading === true, [isLoading]);

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = values;
        dispatch(startRegister(name, email, password));
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
                                values={values.name}
                            />
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={setValues}
                                values={values.email}
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                onChange={setValues}
                                values={values.password}
                            />
                        </Form.Group>
                        {errorMessage && (
                            <Alert className="mt-2" variant="danger">
                                {errorMessage}
                            </Alert>
                        )}
                        <Button
                            type="submit"
                            variant="dark"
                            className="mt-2"
                            disabled={isChecking}
                        >
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
