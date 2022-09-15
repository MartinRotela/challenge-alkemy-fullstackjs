import { Col, Container, Row } from 'react-bootstrap';
import { EntriesList } from '../entries/EntriesList';
import { NavBar } from '../ui/NavBar';

export const HomeScreen = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Row className="d.flex justify-content-center">
                    <Col xl={6} className="d.flex justify-content-center">
                        <h1 className="text-center font-weight-bold mb-5">
                            $0.00
                        </h1>
                        <EntriesList />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
