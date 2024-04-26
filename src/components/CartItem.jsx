/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const CartItem = ({ product, removeFromCart }) => {
    if (!product) {
        return <div>Error Reading Product</div>;
    }
    return (
        <div key={product?.id} className='cart-item'>
            <p>{product?.title.toUpperCase()}</p>
            <p>R${product?.prices}</p>
            <button onClick={() => removeFromCart(product)}>Remover</button>
        </div>
    );
};
