import { render, screen, fireEvent, act } from '@testing-library/react';
import FirstPage from './FirstPage';

jest.spyOn(console, 'log').mockImplementation(() => {});

describe('FirstPage Component', () => {
  test('renders the form and allows user interaction', async () => {
    render(<FirstPage />);

    const campo1 = screen.getByLabelText(/campo 1/i);
    const campo2 = screen.getByLabelText(/campo 2/i);
    const campo3 = screen.getByLabelText(/campo 3/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.change(campo1, { target: { value: 'test1' } });
      fireEvent.change(campo2, { target: { value: 'test12' } });
      fireEvent.change(campo3, { target: { value: 'test123' } });
    });

    expect(campo1.value).toBe('test1');
    expect(campo2.value).toBe('test12');
    expect(campo3.value).toBe('test123');

    await act(() => {
      fireEvent.click(submitButton);
    });

    expect(console.log).toHaveBeenCalledWith({
      campo1: 'test1',
      campo2: 'test12',
      campo3: 'test123',
    });
  });

  test('shows validation errors when fields are invalid', async () => {
    render(<FirstPage />);

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(/campo1 es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/campo2 es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/campo3 es requerido/i)).toBeInTheDocument();
  });
});
