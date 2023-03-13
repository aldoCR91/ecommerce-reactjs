import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//import {AppRouter} from './router'
import StoreApp from './StoreApp'
import {store} from './store';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StoreApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);


