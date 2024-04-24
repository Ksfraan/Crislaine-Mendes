import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../constants/constants';
import { useFetchCart } from '../hooks/useFetchCart';

import '../styles/Cart.css';

const Cart = () => {
    const { isLoading, cart, totalPrice } = useFetchCart();
    console.log('🚀 ~ Cart ~ cart:', cart);

    const removeFromCart = async (product) => {
        const productId = product?.id;
        try {
            await axios.post(`${baseUrl}/carrinho/remover`, {
                itemId: productId,
            });
        } catch (error) {
            console.error('Erro ao remover item do carrinho:', error);
        }
    };

    if (isLoading) {
        return null;
    }

    return (
        <div className='cart-page-wrapper'>
            <div className='cart-wrapper'>
                <h2>Carrinho</h2>
                {cart?.map((product) => (
                    <div key={product?.id} className='cart-item'>
                        <p>{product?.titulo}</p>
                        <p>${product?.investimento}</p>
                        <button onClick={() => removeFromCart(product)}>
                            Remover
                        </button>
                    </div>
                ))}
                {cart?.length === 0 && <p>O seu carrinho está vazio.</p>}
                <p>
                    <b>Total:</b> R$ {totalPrice}
                </p>
                <Link to='/checkout'>
                    <button>Finalizar Compra</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
