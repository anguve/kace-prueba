import PropTypes from 'prop-types';
import { Button } from '@headlessui/react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
const RowComponent = ({ row, setOpen, deleteF, setId }) => {

    return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {row.id}
        </th>
        <td className="px-6 py-4">
            {row.name}
        </td>
        <td className="px-6 py-4">
            {row.email}
        </td>
        <td className="px-6 py-4">
            {row.phone}
        </td>
        <td className="px-6 py-4">
            {row.address}
        </td>
        <td className="px-6 py-4">
            {row.balance}
        </td>
        <td className="px-6 py-4">
            <Button onClick={()  => {setOpen((old) => !old), setId(row)}}>
                <PencilSquareIcon className='size-5'/>
            </Button>
            <Button onClick={() => deleteF.mutate(row.id)}>
                <TrashIcon className='size-5'/>
            </Button>
        </td>
    </tr>
    )
}
RowComponent.propTypes = {
    row: PropTypes.object.isRequired,
    setOpen: PropTypes.func,
    setId: PropTypes.func,
    deleteF: PropTypes.object
}
export default RowComponent;