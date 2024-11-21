import { instanceAxios } from '../utils/axios';

export const getClients = async () => {
    const response = await instanceAxios.get('/clients');
    return response.data;
}


export const updateClient = async (id, data) => {
    const response = await instanceAxios.put(`/clients/${id}`, data);
    return response.data;
}

export const createClient = async (data) => {
    const response = await instanceAxios.post('/clients', data);
    return response.data;
}

export const deleteClient = async (id) => {
    const response = await instanceAxios.delete(`/clients/${id}`);
    return response.data;
}