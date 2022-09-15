import { Table } from 'react-bootstrap';
import { EntryItem } from './EntryItem';

export const EntriesList = () => {
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
                <EntryItem />
                <EntryItem />
                <EntryItem />
                <EntryItem />
            </tbody>
        </Table>
    );
};
