import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/SignupPage.css';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        const requestBody = { email, password, name };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/signup`,
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
                const errorDescription = errorData.message || 'Request error';
                throw new Error(errorDescription);
            }

            navigate('/login');
        } catch (error) {
            const errorDescription = error.message || 'Request error';
            setErrorMessage(errorDescription);
        }
    };
    return (
        <div className='signup-wrapper'>
            <form onSubmit={handleSignupSubmit} className='form-wrapper'>
                <h3>Sign up</h3>

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

                <label className='signup-label'>Primeiro e último nome:</label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleName}
                    autoComplete='off'
                />

                <button type='submit'>Criar uma conta</button>
            </form>

            <p>Já tem uma conta?</p>
            <Link to='/login'>Log in</Link>

            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default SignupPage;
