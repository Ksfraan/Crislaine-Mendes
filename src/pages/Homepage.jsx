import CrisFoto from '../assets/crisFotoHomepage.jpeg';

import '../styles/homepage.css';

const Homepage = () => {
    return (
        <>
            <div className='homepage-wrapper'>
                <h5 className='ola-cris-mendes-text'>
                    OLÁ! PRAZER, EU SOU A CRIS!
                </h5>
                <img src={CrisFoto} alt='Foto Cris Mendes' />

                <p className='jornada-cris-text'>
                    Minha jornada na moda revelou não apenas um interesse, mas
                    uma paixão pelas cores e suas essências durante minha
                    descoberta pessoal. Meu objetivo é auxiliar as pessoas a
                    colorirem suas vidas e descobrirem sua verdadeira essência.
                    Paulista de origem, agora estou estabelecida em Sorocaba,
                    SP. Sou especialista formada em coloração pessoal pela
                    renomada Studio Immagine, uma escola pioneira e referência
                    no Brasil. Além disso, sou consultora de imagem formada pela
                    Belas Artes, com especialização em análise de visagismo
                    simulado. Estou aqui para compartilhar meu conhecimento e
                    contribuir para que cada indivíduo revele sua beleza única.
                    Mais uma vez, prazer em conhecê-los!
                </p>
            </div>
        </>
    );
};

export default Homepage;
