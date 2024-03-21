/* eslint-disable react/no-unescaped-entities */
import '../styles/footer.css';

import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/InstagramIcon.png';
import whatsAppIcon from '../assets/whatsAppIcon.png';
import telegramIcon from '../assets/telegramIcon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <ul className='footer-lists-icons'>
                    <li>
                        <img src={facebookIcon} alt='Facebook icon' />
                    </li>
                    <li>
                        <img src={instagramIcon} alt='Instagram icon' />
                    </li>

                    <li>
                        <img src={whatsAppIcon} alt='WhatsApp icon' />
                    </li>

                    <li>
                        <img src={telegramIcon} alt='Telegram icon' />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
