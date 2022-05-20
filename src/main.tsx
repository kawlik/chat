import React from 'react'
import ReactDOM from 'react-dom/client'

//  App
import App from './app';

//  Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

//  Routing
import { BrowserRouter } from 'react-router-dom';


/*  Render App
/*   *   *   *   *   *   *   *   *   *   */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <BrowserRouter>

        <App />

    </BrowserRouter>
    </React.StrictMode>
);