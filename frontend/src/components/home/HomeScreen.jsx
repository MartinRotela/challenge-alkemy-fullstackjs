import { Col, Container, Row } from 'react-bootstrap';
import { EntriesList } from '../entries/EntriesList';
import { NavBar } from '../ui/NavBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSettingEntries } from '../../store/slices/entries/thunks';
import { startSettingCategories } from '../../store/slices/categories/thunks';
import { AppModal } from '../ui/modal/AppModal';
import { AddNewButton } from '../ui/buttons/AddNewButton';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const { balance } = useSelector((state) => state.entries);

    useEffect(() => {
        dispatch(startSettingEntries());
        dispatch(startSettingCategories());
    }, [dispatch]);

    return (
        <>
            <Container>
                <AppModal />
                <Row className="d.flex justify-content-center">
                    <Col xl={6} className="d.flex justify-content-center">
                        <h1 className="text-center font-weight-bold mb-5">
                            ${balance.toFixed(2)}
                        </h1>
                        <EntriesList />
                    </Col>
                </Row>
                <AddNewButton />
            </Container>
        </>
    );
};
