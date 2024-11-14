import { createHashRouter } from 'react-router-dom';
import { FirstPage, SecondPage } from './lazyRoutes';
import Container from '../containers/containers';

export const router = createHashRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: 'firstPage',
        element: <FirstPage />,
      },
      {
        path: 'secondPage',
        element: <SecondPage />,
      },
    ],
  },
  {
    path: '*',
    element: <div className="bg-green-500 text-white p-4">No found</div>,
  },
]);
