import CrisFoto from '../assets/crisFotoHomepage.jpeg';

import '../styles/homepage.css';

function Homepage() {
    return (
        <>
            <div className='homepage-wrapper'>
                <h1>Coloração Pessoal</h1>
                <img src={CrisFoto} alt='Foto Cris Mendes' />
            </div>
        </>
    );
}

export default Homepage;
