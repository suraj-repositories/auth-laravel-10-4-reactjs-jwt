
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <Main />
     </BrowserRouter>
);
