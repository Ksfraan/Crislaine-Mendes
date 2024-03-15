import burguerButton from '../assets/burguerButton.png';

// eslint-disable-next-line react/prop-types
const BurguerButton = ({ onClick }) => {
    return (
        <button className='burger-button' onClick={onClick}>
            <img src={burguerButton} alt='' />
        </button>
    );
};

export default BurguerButton;
