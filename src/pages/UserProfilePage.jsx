import { useEffect, useState, useContext } from 'react';

// Contexts
import { AuthContext } from '../context/Auth.context';
// Icons
import ProfileIcon from '../assets/profile-icon.png';
// Import Styles
import '../styles/UserProfilePage.css';

// Import the string from the .env with URL of the API/server - http://localhost:5005

const UserProfilePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [newUsername, setNewUsername] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        const getUser = async () => {
            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                try {
                    const response = await fetch(
                        `${import.meta.env.VITE_API_URL}/profile/${user._id}`,

                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${storedToken}`,
                            },
                        }
                    );

                    if (!response.ok) {
                        const errorData = response.json();
                        const errorDescription = errorData.message;
                        throw new Error(errorDescription);
                    }

                    const data = await response.json();
                    setUserProfile(data);
                    setLoading(false);
                } catch (error) {
                    setErrorMessage(error.message);
                }
            } else {
                setErrorMessage(errorMessage);
            }
        };

        getUser();
    }, [errorMessage, user._id]);

    // CHANGE USERNAME
    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/profile/${user._id}/update`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${storedToken}`,
                    },
                    body: JSON.stringify({ name: newUsername }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const updatedUserProfile = await response.json();
            setUserProfile(updatedUserProfile);
            setUser(updatedUserProfile);
            setModalVisible(false);
            setSuccessMessage('Nome de usuário atualizado com sucesso!');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const openModal = () => {
        setModalVisible(true);
        setSuccessMessage('');
    };

    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return userProfile ? (
        <div className='user-profile-page-container'>
            <img
                src={ProfileIcon}
                alt='profile-photo'
                className='profile-image'
            />
            <h1 className='profile-name'>{userProfile.name}</h1>

            {successMessage && (
                <div className='success-message'>{successMessage}</div>
            )}

            <button onClick={openModal} className='update-button'>
                Atualizar nome de usuário
            </button>

            {modalVisible && (
                <div className='modal'>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Novo Nome de usuário:
                            <input
                                type='text'
                                value={newUsername}
                                onChange={handleUsernameChange}
                                className='input-username'
                                placeholder='Input New Username'
                            />
                        </label>
                        <button type='submit' className='update-username'>
                            Atualizar nome de usuário
                        </button>
                        <button
                            onClick={() => setModalVisible(false)}
                            className='close'
                        >
                            Fechar
                        </button>
                    </form>
                </div>
            )}
        </div>
    ) : null;
};
export default UserProfilePage;
