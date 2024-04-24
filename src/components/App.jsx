import { Routes, Route } from 'react-router-dom';

import Footer from './footer';
import Header from './Header';
import HomePage from '../pages/Homepage';
import Visagismo from '../pages/VisagismoPage';
import Coloracao from '../pages/ColoracaoPessoal';
import ErrorPage from '../pages/ErrorPage';

import Cart from '../pages/Cart';

import '../styles/App.css';
import BurgerButton from './BurgerButton';

const App = () => {
    return (
        <>
            <main className='App-wrapper'>
                <BurgerButton />
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/visagismo' element={<Visagismo />} />
                    <Route path='/coloracao' element={<Coloracao />} />
                    <Route path='/carrinho' element={<Cart />} />

                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
