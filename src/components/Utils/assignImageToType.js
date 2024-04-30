import bronzeImage from '../../assets/crisPhotoYellowDress.png';
import silverImage from '../../assets/crisPhotoCartelaCores.png';
import goldImage from '../../assets/crisPhotoGreenDress.png';
import quartzoRosa from '../../assets/quartzoRosa.jpeg';
import Cristal from '../../assets/cristal.jpeg';
import esmeralda from '../../assets/esmeralda.jpeg';
import jadeImage from '../../assets/crisPhotoComTecidos.png';
import rubyImage from '../../assets/crisPhotoOrangeDress.png';
import ametistaImage from '../../assets/crisPhotoFace.png';

export const assignImageToType = (type) => {
    switch (type) {
        case 'bronze':
            return bronzeImage;

        case 'prata':
            return silverImage;
        case 'gold':
            return goldImage;
        case 'quartzoRosa':
            return quartzoRosa;

        case 'cristal':
            return Cristal;

        case 'esmeralda':
            return esmeralda;

        case 'ametista':
            return ametistaImage;

        case 'ruby':
            return rubyImage;

        case 'jade':
            return jadeImage;

        default:
            return silverImage;
    }
};
