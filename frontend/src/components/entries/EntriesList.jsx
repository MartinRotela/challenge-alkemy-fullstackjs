import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { EntryItem } from './EntryItem';

export const EntriesList = () => {
    const { entries, isLoading } = useSelector((state) => state.entries);

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
