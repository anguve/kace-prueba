import RowComponent from './row/RowComponent';
import PropTypes from 'prop-types';

const TableComponent = ({
    rows,
    loading,
    setOpen,
    setId,
    deleteF
}) => {

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Cédula
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Correo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dirrección
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Saldo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows && rows?.map((row) => (
                        <RowComponent
                        row={row}
                        key={row.id}
                        setOpen={setOpen}
                        setId={setId}
                        deleteF={deleteF}
                        />
                    ))}
                    {loading && (
                        <tr>
                            <td colSpan="7" className="text-center">
                                Loading...
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
        )
} 
TableComponent.propTypes = {
    rows: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    setOpen: PropTypes.func,
    setId: PropTypes.func,
    deleteF: PropTypes.object
}
export default TableComponent;