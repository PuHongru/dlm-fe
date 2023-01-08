import { lazy } from 'react';
const Download = lazy(() => import('./mobilePages/Download'));
const Home = lazy(() => import('./pcPages/Home/index'));
export { Download, Home };
