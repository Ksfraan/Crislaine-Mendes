import { Routes, Route } from 'react-router-dom';
import { PageViewWrapper } from './PageView/PageViewWrapper';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { AuthProviderWrapper } from '../context/Auth.context';

import Footer from './footer';
import Header from './Header';
import HomePage from '../pages/Homepage';
import ColoracaoPessoalPage from '../pages/ColoracaoPessoal';
import VisagismoComColoracao from '../pages/VisagismoComColoracaoPessoal';
import ErrorPage from '../pages/ErrorPage';
import Cart from '../pages/Cart/Cart';

import '../styles/App.css';
import VisagismoPage from '../pages/VisagismoPage';
import IsPrivate from './IsPrivate';
import UserProfilePage from '../pages/UserProfilePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

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
                        <Route
                            path='/profile'
                            element={
                                <IsPrivate>
                                    <UserProfilePage />
                                </IsPrivate>
                            }
                        />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/signup' element={<SignupPage />} />
                        <Route path='/carrinho' element={<Cart />} />

                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </PageViewWrapper>
            </div>
            <Footer />
        </>
    );
};

export default function AppWithAuthProvider() {
    return (
        <AuthProviderWrapper>
            <App />
        </AuthProviderWrapper>
    );
}
