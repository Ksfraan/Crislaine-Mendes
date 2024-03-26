import esmeralda from '../assets/esmeralda.jpeg';

import '../styles/visagismo.css';

const PacoteEsmeraldaVisagismo = () => {
    return (
        <div className='pacote-esmeralda-wrapper'>
            <h3>PACOTE ESMERALDA</h3>
            <p>
                Nesse pacote irei te ajudar com o seu objetivo de imagem .
                indicado para quem quer uma ajuda profissional para quem quer
                fazer uma mudança estratégica. irei analisar a forma do seu
                rosto , e simular 5 variações de corte de cabelo e 8 variações
                de cores baseado na sua cartela caso você ja saiba sua coloração
                pessoal e de forma aleatória para quem não sabe a cartela Inclui
                também simulação de óculos ( no seu proprio rosto) e indicação
                de penteados e acessórios e chamada de vídeo de 1h .
            </p>
            <br />
            <p>
                Inclusos: 5 simulação de corte 8 variações de cor PRAZO DE
                ENTREGA 20 dias úteis para o visagismo.
            </p>
            <br />
            <div className='pacote-esmeralda-investimento'>
                <h5>Investimento 3x 220,00 à vista: R$630,00</h5>
                <img src={esmeralda} alt='esmeralda image' />
            </div>
        </div>
    );
};

export default PacoteEsmeraldaVisagismo;
