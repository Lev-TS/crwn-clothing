import React from 'react';
import ReactDOM from 'react-dom';
//importing BrowserRouter
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
