import { useState, useRef } from 'react';
import { getClients, deleteClient, updateClient } from '../../services/clientsServices';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


export const useClients = () => {
    const bottonRef = useRef();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);
    const queryClient = useQueryClient();

 // Tanstack Query
    const { isLoading: isLoadingClients, data, isError, error } = useQuery({
        queryKey: ['clients'],
        queryFn: getClients,
        select: (data) => data.sort((a, b) => a.id - b.id)
    });

 // Tanstack Query
    const updateClients = useMutation({
        mutationFn: (values) => updateClient(values.id, values),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['clients'] })
    });

 // Tanstack Query
    const deleteClients = useMutation({
        mutationFn: (id) => deleteClient(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['clients'] })
    });

    return {
        open,
        setOpen,
        isLoadingClients,
        data,
        isError,
        error,
        updateClients,
        deleteClients,
        bottonRef,
        setId,
        id
    }
};