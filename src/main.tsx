import React from 'react'
import ReactDOM from 'react-dom/client'


//  App
import App from './app';


//  Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';


//  Routing & PWA
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';


//  Register
registerSW({
    onNeedRefresh() { },
    onOfflineReady() { },
});


/*  Render App
/*   *   *   *   *   *   *   *   *   *   */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <BrowserRouter>

        <App />

    </BrowserRouter>
    </React.StrictMode>
);