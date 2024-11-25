import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { it, describe, beforeEach, expect } from '@jest/globals';
import { EditClients } from './EditClients';



const mockMutate = jest.fn(); // Mock de la función mutate

const mockRow = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    balance: '1000'
};
  
const mockProps = {
    row: mockRow,
    editClients: {
        mutate: mockMutate,
    }
};



describe('Componente EditClients', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Limpiar los mocks
    });

    it ('debería renderizar el formulario con los valores iniciales', () => {
        render(<EditClients {...mockProps} />); // Renderizar el componente

        // Verificar que los valores iniciales estén en los inputs
        expect(screen.getByLabelText(/Nombre/i)).toHaveValue(mockRow.name);
        expect(screen.getByLabelText(/Correo Electronico/i)).toHaveValue(mockRow.email);
        expect(screen.getByLabelText(/Balance/i)).toHaveValue(mockRow.balance);
    });

    it('debería mostrar un error si los campos no cumplen con la validación', async () => {
        render(<EditClients {...mockProps} />); // Renderizar el componente
        
        await act( async() => {
            fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: '' } });
            fireEvent.change(screen.getByLabelText(/Correo Electronico/i), { target: { value: '' } });
            fireEvent.change(screen.getByLabelText(/Balance/i), { target: { value: null } });

            const submitButton = screen.getByRole('button', { type: 'submit' }); // Obtener el botón de enviar
            fireEvent.click(submitButton); // Enviar el formulario
        });
    
        // Esperar los errores de validación
        await waitFor(() => {
          expect(screen.getByText(/Nombre no puede estar vacio/i)).toBeInTheDocument();
          expect(screen.getByText(/Email no puede estar vacio/i)).toBeInTheDocument();
          expect(screen.getByText(/Balance debe ser de tipo numero/i)).toBeInTheDocument();
        });
    });

    it('Debería llamar a mutate con los valores correctos cuando el formulario es válido', async () => {
        render(<EditClients {...mockProps} />);
    
        await act( async() => {
            // Rellenar el formulario con nuevos valores
            fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Carlos García' } });
            fireEvent.change(screen.getByLabelText(/Correo Electronico/i), { target: { value: 'carlos.garcia@example.com' } });
            fireEvent.change(screen.getByLabelText(/Balance/i), { target: { value: '2000' } });
        
            // Enviar el formulario
            const submitButton = screen.getByRole('button', { type: 'submit' }); // Obtener el botón de enviar
            fireEvent.click(submitButton); // Enviar el formulario
        });

    
        // Esperar que la función mutate sea llamada con los valores correctos
        await waitFor(() => {
          expect(mockMutate).toHaveBeenCalledWith({
            ...mockRow,
            name: 'Carlos García',
            email: 'carlos.garcia@example.com',
            balance: '2000',
          });
        });
      });
});