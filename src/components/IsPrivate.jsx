/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { Navigate } from 'react-router-dom';

function IsPrivate({ children }) {
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    if (isLoading) return <p>Loading ...</p>;

    if (!isLoggedIn) {
        return <Navigate to='/' />;
    } else {
        return children;
    }
}

export default IsPrivate;
