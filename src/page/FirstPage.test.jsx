import { render, screen, fireEvent, act } from '@testing-library/react';

import FirstPage from './firstPage';

jest.spyOn(console, 'log').mockImplementation(() => {});

describe('firs Page', () => {
  test('renderizar el formulario para los usarios', async () => {
    render(<FirstPage />);

    const campo1 = screen.getByLabelText(/campo 1/i);
    const campo2 = screen.getByLabelText(/campo 2/i);
    const campo3 = screen.getByLabelText(/campo 3/i);

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.change(campo1, { target: { value: 'test1' } });
      fireEvent.change(campo2, { target: { value: 'test22' } });
      fireEvent.change(campo3, { target: { value: 'test322' } });
    });

    expect(campo1.value).toBe('test1');
    expect(campo2.value).toBe('test22');
    expect(campo3.value).toBe('test322');

    await act(() => {
      fireEvent.click(submitButton);
    });

    expect(console.log).toHaveBeenCalledWith({
      campo1: 'test1',
      campo2: 'test22',
      campo3: 'test322',
    });
  });

  test('valicion de errores', async () => {
    render(<FirstPage />);

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await act(() => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(/campo1 es requerido/i));
    expect(screen.getByText(/campo2 es requerido/i));
    expect(screen.getByText(/campo3 es requerido/i));
  });
});
