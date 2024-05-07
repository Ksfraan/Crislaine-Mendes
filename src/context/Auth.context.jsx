/* eslint-disable react/prop-types */
import {
    useState,
    useEffect,
    createContext,
    useCallback,
    useMemo,
    useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProviderWrapper = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);

    const navigate = useNavigate();

    const storeToken = useCallback((token) => {
        localStorage.setItem('authToken', token);
    }, []);
    // do not touch else will ruin all calls
    const storedToken = localStorage.getItem('authToken');

    const authenticateUser = () => {
        // Must also exist in here to be able to login/off correctly.
        const updatedStoredToken = localStorage.getItem('authToken');

        if (updatedStoredToken) {
            fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${updatedStoredToken}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((user) => {
                    setIsLoggedIn(true);
                    setIsLoading(false);
                    setUser(user);
                })
                .catch((error) => {
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUser(null);
                    setAuthError(error.message || 'Erro na autenticação');
                });
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
        }
    };

    const removeToken = useCallback(() => {
        localStorage.removeItem('authToken');
    }, []);

    const logOutUser = useCallback(() => {
        removeToken();
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
    }, [navigate, removeToken]);

    useEffect(() => {
        authenticateUser();
    }, []);

    const value = useMemo(
        () => ({
            isLoggedIn,
            isLoading,
            user,
            setUser,
            storeToken,
            storedToken,
            authenticateUser,
            logOutUser,
            authError,
        }),
        [
            authError,
            isLoading,
            isLoggedIn,
            logOutUser,
            storeToken,
            storedToken,
            user,
        ]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const useAuthContext = () => {
    const value = useContext(AuthContext);
    return value;
};

export { useAuthContext, AuthProviderWrapper, AuthContext };
