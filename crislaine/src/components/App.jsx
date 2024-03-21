import { Routes, Route } from 'react-router-dom';

import Footer from './footer';
import Header from './Header';
import HomePage from '../pages/Homepage';
import Visagismo from '../pages/VisagismoPage';
import Coloracao from '../pages/ColoracaoPessoal';
import ErrorPage from '../pages/ErrorPage';

import '../styles/App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/visagismo' element={<Visagismo />} />
                <Route path='/coloracao' element={<Coloracao />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
