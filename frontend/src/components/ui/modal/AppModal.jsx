import React, { useEffect, useMemo, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    startAddNewEntry,
    startDeleteEntry,
    startSetBalance,
    startUpdateEntry,
} from '../../../store/slices/entries/thunks';
import { closeModal } from '../../../store/slices/modalSlice';

export const AppModal = () => {
    const dispatch = useDispatch();
    const { activeEntry, open } = useSelector((state) => state.modal);
    const { categories } = useSelector((state) => state.categories);

    const initialState = {
        description: '',
        amount: 0,
        CategoryId: '',
        type: '',
    };
    const [formValues, setFormValues] = useState(initialState);
    useEffect(() => {
        if (activeEntry) {
            setFormValues(activeEntry);
        }
        return () => {
            setFormValues(initialState);
        };
    }, [activeEntry]);

    const { description, amount, type, id, CategoryId } = formValues;

    const show = useMemo(() => open, [open]);

    const handleInputChange = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value });
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleSave = (e) => {
        if (activeEntry) {
            dispatch(startUpdateEntry(id, { description, amount, CategoryId }));
        } else {
            dispatch(startAddNewEntry(formValues));
        }
        dispatch(startSetBalance());
        dispatch(closeModal());
    };

    const handleDelete = () => {
        dispatch(startDeleteEntry(id));
        dispatch(startSetBalance());
        dispatch(closeModal());
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} id="createAndModifyForm">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {activeEntry ? 'Modify Entry' : 'New Entry'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter a description..."
                                value={description}
                                name="description"
                                onChange={handleInputChange}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                value={type}
                                name="type"
                                onChange={handleInputChange}
                                disabled={activeEntry}
                                required
                            >
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                value={CategoryId}
                                name="CategoryId"
                                onChange={handleInputChange}
                                required
                            >
                                {categories.map((category) => (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0"
                                name="amount"
                                value={amount}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {activeEntry && (
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    )}
                    <Button variant="dark" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
