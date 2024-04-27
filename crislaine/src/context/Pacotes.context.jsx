import {
    createContext,
    useState,
    useEffect,
    useContext,
    useMemo,
    useCallback,
} from 'react';
import axios from 'axios';
import { baseUrl } from '../constants/constants';
import PropTypes from 'prop-types';

const formatPacotes = (data) => {
    if (!data || !Array.isArray(data)) {
        return {};
    }

    return data.reduce((formattedData, pacote) => {
        formattedData[pacote.type] = { ...pacote };
        return formattedData;
    }, {});
};

export const PacotesContext = createContext();

const PacotesContextProvider = ({ children }) => {
    const [pacotes, setPacotes] = useState(null);
    const fetchPacotes = useCallback(async () => {
        try {
            const response = await axios.get(`${baseUrl}/pacotes`);
            setPacotes(response.data);
        } catch (error) {
            console.error('Erro ao buscar os pacotes:', error);
        }
    }, []);

    useEffect(() => {
        if (pacotes) {
            return;
        }

        fetchPacotes();
    }, [fetchPacotes, pacotes]);

    const formattedPacotes = useMemo(() => {
        return formatPacotes(pacotes);
    }, [pacotes]);

    return (
        <PacotesContext.Provider value={formattedPacotes}>
            {children}
        </PacotesContext.Provider>
    );
};

PacotesContextProvider.propTypes = {
    children: PropTypes.node,
};

export const usePacotesContext = () => {
    const pacotes = useContext(PacotesContext);
    return pacotes;
};

export { PacotesContextProvider };
