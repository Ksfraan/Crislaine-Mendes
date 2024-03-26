import '../styles/visagismo.css';

import cristal from '../assets/cristal.jpeg';

const PacoteCristalVisagismo = () => {
    return (
        <div className='pacote-cristal-wrapper'>
            <h3>PACOTE CRISTAL </h3>
            <p>
                Nesse pacote irei te ajudar com o seu objetivo de imagem .
                indicado para quem quer uma ajuda profissional para quem quer
                fazer uma mudança estratégica. irei analisar a forma do seu
                rosto , e simular 2 variações de corte de cabelo e 3 variações
                de cores baseado na sua cartela caso você ja saiba sua coloração
                pessoal e de forma aleatória para quem não sabe a cartela ( você
                pode dar sugestão).
            </p>
            <p>
                Inclusos: 2 simulação de corte 3 variações de cor PRAZO DE
                ENTREGA 10 dias úteis para o visagismo.
            </p>
            <div className='investimento-visagismo-cristal'>
                <h5>Investimento 3x 130,00 à vista: R$360,00</h5>
                <img src={cristal} alt='cristal image' />
            </div>
        </div>
    );
};

export default PacoteCristalVisagismo;
