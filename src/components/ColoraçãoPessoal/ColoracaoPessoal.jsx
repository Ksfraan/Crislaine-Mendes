import { usePacotesContext } from '../../context/Pacotes.context';
import { ProductCard } from '../ProductCard/ProductCard';
import { assignImageToType } from '../../components/Utils/imageUtils';

import '../../components/VisagismoComColoracao/VisagismoComColoracao.css';

const ColoracaoPessoal = () => {
    const pacotes = usePacotesContext();

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
                            item={item}
                            assignImageToType={assignImageToType}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};

export default ColoracaoPessoal;
