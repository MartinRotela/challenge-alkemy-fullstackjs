import moment from 'moment';

export const EntryItem = ({ description, type, amount, createdAt }) => {
    const value = type === 'expense' ? '-' : '+';
    const date = moment(createdAt).format('MMMM Do, YYYY');
    return (
        <>
            <tr>
                <td>
                    {value} ${amount}
                </td>
                <td>{description} </td>
                <td>{date}</td>
            </tr>
        </>
    );
};
