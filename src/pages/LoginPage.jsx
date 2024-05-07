import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';
import { Link } from 'react-router-dom';

import '../styles/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const requestBody = { email, password };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                const errorDescription =
                    errorData.message || 'Erro na requisição';
                throw new Error(errorDescription);
            }

            const responseData = await response.json();

            storeToken(responseData.authToken);
            authenticateUser();
            navigate('/');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='login-page-wrapper'>
            <form onSubmit={handleLoginSubmit} className='login-form-wrapper'>
                <h3>Log in</h3>

                <label className='signup-label'>E-mail:</label>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    autoComplete='off'
                />

                <label className='signup-label'>Senha:</label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handlePassword}
                    autoComplete='off'
                />

                <button type='submit'>Log in</button>
            </form>

            <p>Ainda não possui uma conta?</p>
            <Link to='/signup'>Sign up</Link>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default LoginPage;
