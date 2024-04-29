import { usePacotesContext } from '../../context/Pacotes.context';
import { ProductCard } from '../ProductCard/ProductCard';
import { assignImage } from '../../components/Utils/imageUtils';

import '../../components/VisagismoComColoracao/VisagismoComColoracao.css';

const Visagism = () => {
    const pacotes = usePacotesContext();

    if (!pacotes) {
        return <div>Carregando Visagismo Simulado...</div>;
    }

    const pacotesVisagismo = Object.values(pacotes).filter(
        (pacote) =>
            pacote.type === 'cristal' ||
            pacote.type === 'esmeralda' ||
            pacote.type === 'quartzoRosa'
    );

    return (
        <div className='visagism-page-wrapper'>
            <h3 className='visagism-page-title'>
                Pacotes de Visagismo Simulado
            </h3>
            {
                <ul>
                    {pacotesVisagismo.map((item) => (
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

export default Visagism;
