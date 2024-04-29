// import { usePacotesContext } from '../context/Pacotes.context';
// import { VisagismProductCard } from './VisagismProductCard';

// const VisagismoComponent = () => {
//     const pacotes = usePacotesContext();

//     if (!pacotes) {
//         return <div>Carregando Pacotes de Visagismo Simulado...</div>;
//     }

//     const pacotesVisagismo = Object.values(pacotes).filter(
//         (pacote) =>
//             pacote.type === 'cristal' ||
//             pacote.type === 'esmeralda' ||
//             pacote.type === 'quartzoRosa'
//     );

//     return (
//         <div className='visagism-page-wrapper'>
//             {pacotesVisagismo.map((pacote, i) => (
//                 <VisagismProductCard
//                     key={`${pacote.id}-${i}`}
//                     product={pacote}
//                 />
//             ))}
//         </div>
//     );
// };

// export default VisagismoComponent;
