import { usePacotesContext } from '../../context/Pacotes.context';
import { ProductCard } from '../ProductCard/ProductCard';
import bronzeImage from '../../assets/crisPhotoYellowDress.png';
import silverImage from '../../assets/crisPhotoCartelaCores.png';
import goldImage from '../../assets/crisPhotoGreenDress.png';

import '../../components/VisagismoComColoracao/VisagismoComColoracao.css';
import { useCallback } from 'react';

const ColoracaoPessoal = () => {
    const pacotes = usePacotesContext();
    const assignImage = useCallback((item) => {
        let imageResult;
        switch (item?.type) {
            case 'bronze':
                imageResult = bronzeImage;
                break;
            case 'prata':
                imageResult = silverImage;
                break;
            case 'gold':
                imageResult = goldImage;
                break;

            default:
                imageResult = silverImage;
                break;
        }

        return imageResult;
    }, []);

    if (!pacotes) {
        return <div>Carregando Pacotes de Coloração Pessoal...</div>;
    }

    const pacotesColoracao = Object.values(pacotes).filter(
        (pacote) =>
            pacote.type === 'bronze' ||
            pacote.type === 'prata' ||
            pacote.type === 'gold'
    );

    return (
        <div className='visagism-page-wrapper'>
            <h3 className='visagism-page-title'>
                Pacotes de Coloração Pessoal
            </h3>
            {
                <ul>
                    {pacotesColoracao.map((item) => (
                        <ProductCard
                            key={`${item.id}-${item.type}`}
                            image={assignImage(item)}
                            item={item}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};

export default ColoracaoPessoal;
