import { Col, Container, Row } from 'react-bootstrap';
import { EntriesList } from '../entries/EntriesList';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    startSetBalance,
    startSettingEntries,
} from '../../store/slices/entries/thunks';
import { startSettingCategories } from '../../store/slices/categories/thunks';
import { AppModal } from '../ui/modal/AppModal';
import { AddNewButton } from '../ui/buttons/AddNewButton';
import { LoadingScreen } from '../ui/loading/LoadingScreen';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const { balance, isLoading } = useSelector((state) => state.entries);

    const loading = useMemo(() => isLoading, [isLoading]);

    useEffect(() => {
        dispatch(startSettingEntries());
        dispatch(startSettingCategories());
        dispatch(startSetBalance());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
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
            )}
        </>
    );
};
