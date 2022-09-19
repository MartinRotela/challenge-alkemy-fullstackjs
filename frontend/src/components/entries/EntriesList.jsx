import { useState } from 'react';
import { ButtonGroup, Table, ToggleButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { EntryItem } from './EntryItem';

export const EntriesList = () => {
    const { entries, isLoading } = useSelector((state) => state.entries);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(0);

    const filteredEntries = entries.slice(currentPage, currentPage + 10);

    const nextPage = () => {
        if (currentPage * 10 < entries.length) {
            setCurrentPage(currentPage + 10);
        }
    };
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 10);
        }
    };
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEntries.map((entry) => (
                        <EntryItem key={entry.id} {...entry} />
                    ))}
                </tbody>
            </Table>
            <ButtonGroup>
                <ToggleButton onClick={prevPage} variant="dark">
                    Previous
                </ToggleButton>
                <ToggleButton onClick={nextPage} variant="dark">
                    Next
                </ToggleButton>
            </ButtonGroup>
        </>
    );
};
