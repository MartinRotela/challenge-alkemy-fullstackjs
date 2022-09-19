import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startSetBalance } from '../../store/slices/entries/thunks';
import { EntryItem } from './EntryItem';

export const EntriesList = () => {
    const { entries, isLoading } = useSelector((state) => state.entries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startSetBalance());
    }, [dispatch, entries]);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry) => (
                    <EntryItem key={entry.id} {...entry} />
                ))}
            </tbody>
        </Table>
    );
};
