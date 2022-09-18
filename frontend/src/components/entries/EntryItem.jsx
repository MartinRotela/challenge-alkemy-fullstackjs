import moment from 'moment';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';

export const EntryItem = ({
    id,
    description,
    type,
    amount,
    createdAt,
    updatedAt,
}) => {
    const value = type === 'expense' ? '-' : '+';
    const date = moment(createdAt).format('MMMM Do, YYYY');
    const dispatch = useDispatch();
    const activeEvent = { description, amount, type, id, createdAt, updatedAt };

    const openModModal = () => {
        dispatch(openModal(activeEvent));
    };
    return (
        <>
            <tr onDoubleClick={openModModal}>
                <td>
                    {value} ${amount}
                </td>
                <td>{description} </td>
                <td>{date}</td>
            </tr>
        </>
    );
};
