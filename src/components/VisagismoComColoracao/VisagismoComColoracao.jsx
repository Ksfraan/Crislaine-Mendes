import { usePacotesContext } from '../../context/Pacotes.context';
import { ProductCard } from '../ProductCard/ProductCard';
import { assignImageToType } from '../../components/Utils/imageUtils';

import '../VisagismoComColoracao/VisagismoComColoracao.css';

const VisagismoComColoracao = () => {
    const pacotes = usePacotesContext();

    if (!pacotes) {
        return (
            <div>
                Carregando Pacotes de Visagismo Simulado + Coloração Pessoal...
            </div>
        );
    }

    const pacotesVisagismoComColoracao = Object.values(pacotes).filter(
        (pacote) =>
            pacote.type === 'jade' ||
            pacote.type === 'ruby' ||
            pacote.type === 'ametista'
    );

    return (
        <div className='visagism-page-wrapper'>
            <h3 className='visagism-page-title'>
                Pacotes Visagismo <br /> Com Coloração
            </h3>
            {
                <ul>
                    {pacotesVisagismoComColoracao.map((item) => (
                        <ProductCard
                            key={`${item.id}-${item.title}`}
                            item={item}
                            image={assignImageToType(item.type)}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};

export default VisagismoComColoracao;
