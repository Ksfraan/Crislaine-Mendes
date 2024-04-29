import { Routes, Route } from 'react-router-dom';

import Footer from './footer';
import Header from './Header';
import HomePage from '../pages/Homepage';
import ColoracaoPessoalPage from '../pages/ColoracaoPessoal';
import VisagismoComColoracao from '../pages/VisagismoComColoracaoPessoal';
import ErrorPage from '../pages/ErrorPage';
import { PageViewWrapper } from './PageView/PageViewWrapper';
import Cart from '../pages/Cart/Cart';

import '../styles/App.css';
import { useScrollToTop } from '../hooks/useScrollToTop';
import VisagismoPage from '../pages/VisagismoPage';

const App = () => {
    // Automatic Scroll to top
    useScrollToTop();
    return (
        <>
            <div className='App-wrapper'>
                <Header />
                <PageViewWrapper>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/visagismo' element={<VisagismoPage />} />
                        <Route
                            path='/coloracao'
                            element={<ColoracaoPessoalPage />}
                        />
                        <Route
                            path='/visagismoecoloracao'
                            element={<VisagismoComColoracao />}
                        />
                        <Route path='/carrinho' element={<Cart />} />

                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </PageViewWrapper>
            </div>
            <Footer />
        </>
    );
};

export default App;
