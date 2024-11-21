import { lazy } from 'react';

export const FirstPage = lazy(() => import('../pages/firstPage'));
export const SecondPage = lazy(() => import('../pages/SecondPage'));
export const Container = lazy(() => import('../containers/containers'));