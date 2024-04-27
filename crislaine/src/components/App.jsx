import { Routes, Route } from 'react-router-dom';

import Footer from './footer';
import Header from './Header';
import HomePage from '../pages/Homepage';
import Visagismo from '../pages/VisagismoPage';
import Coloracao from '../pages/ColoracaoPessoal';
import VisagismoComColoracao from '../pages/VisagismoComColoracaoPessoal';
import Cart from '../pages/Cart';
import ErrorPage from '../pages/ErrorPage';
import BurgerButton from './BurgerButton';

import '../styles/App.css';

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
                    <Route
                        path='/visagismoecoloracao'
                        element={<VisagismoComColoracao />}
                    />
                    <Route path='/carrinho' element={<Cart />} />

                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
