import { lazy } from 'react';
const Download = lazy(() => import('./mobilePages/Download'));
const Home = lazy(() => import('./pcPages/Home/index'));
const SharePage = lazy(() => import('./mobilePages/SharePage'));
export { Download, Home, SharePage };
