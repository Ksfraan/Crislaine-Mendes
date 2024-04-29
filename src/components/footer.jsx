/* eslint-disable react/no-unescaped-entities */
import '../styles/footer.css';

import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/InstagramIcon.png';
import whatsAppIcon from '../assets/whatsAppIcon.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <ul className='footer-lists-icons'>
                    <li>
                        <Link to='https://www.facebook.com/profile.php?id=100081588880623'>
                            <img src={facebookIcon} alt='Facebook icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.instagram.com/crislainemendess?igsh=MXRvZjBpMXR6NG01Mw=='>
                            <img src={instagramIcon} alt='Instagram icon' />
                        </Link>
                    </li>

                    <li>
                        <Link to='https://wa.me/message/LOOIUNEXVDXBN1'>
                            <img src={whatsAppIcon} alt='WhatsApp icon' />
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.flaticon.com/free-icons/gem" title="gem icons">Gem icons created by Freepik - Flaticon</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
