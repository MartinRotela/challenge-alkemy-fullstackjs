import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/slices/modalSlice';

export const AddNewButton = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(openModal());
    };
    return (
        <Button
            variant="dark"
            className=" rounded bottom-0 end-0 mb-4 me-4 position-fixed"
            size="lg"
            onClick={handleClick}
        >
            New
        </Button>
    );
};
