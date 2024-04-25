import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AddToCartProviderWrapper } from './context/AddToCart.context.jsx';
import { HandleClickProvider } from './context/HandleClick.context.jsx';
import App from './components/App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AddToCartProviderWrapper>
                <HandleClickProvider>
                    <App />
                </HandleClickProvider>
            </AddToCartProviderWrapper>
        </BrowserRouter>
    </React.StrictMode>
);
