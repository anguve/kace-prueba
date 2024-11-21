
import { createHashRouter } from 'react-router-dom';
import { FirstPage, SecondPage, Container } from './lazyroutes';

export const routes = createHashRouter([
    {
        path: '/',
        element: <Container/>,
        children: [
            {
                path: 'firstPage',
                element: <FirstPage/>,   
            },
            {
                path: 'secondPage',
                element: <SecondPage/>,   
            }
        ]
    },
    { 
        path: '*',
        element: (
            <div className="bg-red-500 text-white p-4">
                <h1 className="text-3xl font-bold">404 Not Found</h1>
            </div>
        ),   
    }
])