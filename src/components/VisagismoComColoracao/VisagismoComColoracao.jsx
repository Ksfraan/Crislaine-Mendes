import { usePacotesContext } from '../../context/Pacotes.context';
import { ProductCard } from '../ProductCard/ProductCard';

import './VisagismoComColoracao.css';

const VisagismoComColoracao = () => {
    const pacotes = usePacotesContext();

    if (!pacotes) {
        return (
            <div>
                Carregando Pacotes de Visagismo Simulado + Coloração Pessoal...
            </div>
        );
    }

    const pacotesVisagismo = Object.values(pacotes).filter(
        (pacote) =>
            pacote.type === 'ametista' ||
            pacote.type === 'ruby' ||
            pacote.type === 'jade'
    );


    return (
        <div className='visagism-page-wrapper'>
            <h1 className='visagism-page-title'>Pacotes Visagismo <br/> Com Coloração</h1>
            {
                <ul>
                    {
                        pacotesVisagismo.map((item) => (
                            <ProductCard 
                                key={`${item.id}-${item.title}`}
                                item={item}/>
                        ))
                    }
                </ul>
            }
        </div>
    );
};

export default VisagismoComColoracao;
