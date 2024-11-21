import TableComponent from "../components/table/TableComponent";
import { useClients } from "../hooks/clients/useClients";
import ModalComponent from '../components/modal/ModalComponent';
import { EditClients } from "../components/EditClients";


export default function SecondPage() {
    const {
        data,
        isLoadingClients,
        open,
        setOpen,
        deleteClients,
        updateClients,
        bottonRef,
        id,
        setId
     } = useClients();
     
    return (
        <div className="bg-red-500 text-white p-4">
            <h1 className="text-3xl font-bold pb-3">SecondPage</h1>
            <TableComponent 
            rows={data}
            loading={isLoadingClients}
            setOpen={setOpen}
            setId={setId}
            deleteF={deleteClients}
            />
            <ModalComponent
             open={open}
             setOpen={setOpen}
             updateF={updateClients}
             title="Actualizar Cliente"
             context="Ingrese los datos del cliente a actualizar"
             refer={bottonRef}
             >
                <EditClients refer={bottonRef} editClients={updateClients} row={id}/>
            </ModalComponent>
      </div>
    )
}