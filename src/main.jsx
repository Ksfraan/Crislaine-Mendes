import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AddToCartProviderWrapper } from './context/AddToCart.context.jsx';
import { HandleAddToCartProvider } from './context/HandleClick.context.jsx';
import App from './components/App.jsx';
import './styles/index.css';
import { PacotesContextProvider } from './context/Pacotes.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PacotesContextProvider>
            <AddToCartProviderWrapper>
                <HandleAddToCartProvider>
                    <App />
                </HandleAddToCartProvider>
            </AddToCartProviderWrapper>
        </PacotesContextProvider>
    </BrowserRouter>
);
