import { useCartStore } from '../../stores/cart.store';
import './Cart.style.css'
import binIcon from '../../assets/bin-image.png'
import Button from '../../components/Button/Button'

const Cart = () => {
    const { cart, deleteItem, clearCart, incrementItem, decrementItem } = useCartStore();

    const total = cart.reduce(
        (acc, item) => acc + item.totalPrice * item.quantity, 0
    );

    const handlePrice = (item) => {
        const totalItemPrice = item.price * item.quantity;
        return totalItemPrice.toFixed(2);
    };

    return (
        <div className='cart-style'>
            {cart.length ? (<>
                <p>Your items:</p>
                <div className='item-list'>
                    {cart.map((item) => (
                        <div className='item-in-list' key={item.id}>
                            <img className='item-list-image' src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <div className="quantity-style">
                                <span onClick={() => decrementItem(item.id)}>-</span>
                                <span>{item.quantity}</span>
                                <span onClick={() => incrementItem(item.id)}>+</span>
                            </div>
                            <p>${handlePrice(item)}</p>
                            <img src={binIcon} className='bin-image' alt='bin-image' onClick={() => { deleteItem(item.id) }} />
                        </div>
                    ))}
                </div>
                <p className='total-price'>Total: ${total.toFixed(2)}</p>
                <Button className='checkout-button' buttonText='Proceed to checkout' />
                <Button className='clear-cart' handleClick={clearCart} buttonText='Clear cart' />
            </>) : (<h2>No items in cart</h2>)}
        </div>
    )
}

export default Cart;