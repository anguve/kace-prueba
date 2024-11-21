import './App.css'
import { Suspense } from 'react';
import { routes } from './router/router';
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes}/>
    </Suspense>
  )
}

export default App
