import cactusImg from '../../assets/desert.png'
import { Button } from '../Button/Button';
import './EmptyCart.css';

export const EmptyCart = () => {
  return (
    <div className='empty-cart-wrapper'>
      <div className='empty-cart-content'>
        <span className='empty-message'>O seu carrinho <br/>está vazio</span>
        <div className='empty-image-container'>
          <img src={cactusImg} alt="Empty Cart Image Of Cactus" />
        </div>
      </div>
      <Button to={'/'} label={'Voltar'} />
    </div>
  )
};
