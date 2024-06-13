import { useCartStore } from '../../stores/cart.store';
import './Cart.style.css'
import binIcon from '../../assets/bin-image.png'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const router = useNavigate();
    const { cart, deleteItem, clearCart, incrementItem, decrementItem } = useCartStore();

    const total = cart.reduce(
        (acc, item) => acc + item.totalPrice * item.quantity, 0
    );

    const handlePrice = (item) => {
        const totalItemPrice = item.price * item.quantity;
        return totalItemPrice.toFixed(2);
    };

    const openCheckout = () => {
        router('/checkout');
    }

    return (
        <div className='cart-style'>
            {cart.length ? (<>
                <h3>Your items:</h3>
                <hr />
                <div className='item-list'>
                    {cart.map((item) => (
                        <div className='item-in-list' key={item.id}>
                            <img className='item-list-image' src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <div className="quantity-style">
                                <span onClick={() => decrementItem(item.id)}>-</span>
                                <span>{item.quantity}</span>
                                <span onClick={() => incrementItem(item)}>+</span>
                            </div>
                            <p>${handlePrice(item)}</p>
                            <img src={binIcon} className='bin-image' alt='bin-image' onClick={() => { deleteItem(item.id) }} />
                        </div>
                    ))}
                </div>
                <hr />
                <div className='promocode-style'>
                    <input type='text' placeholder='Promocode' />
                    <Button className='promocode-button' buttonText='Apply' />
                </div>
                <hr />
                <div className='subtotal-style'>
                    <h4>Subtotal</h4>
                    <p>${total.toFixed(2)}</p>
                </div>
                <div className='discount-style'>
                    <h5>Discount</h5>
                    <p>(20%) - $156.20 </p>
                </div>
                <hr />
                <div className='total-style'>
                    <h4>Total:</h4>
                    <p>${total.toFixed(2)}</p>
                </div>
                <Button className='checkout-button' handleClick={openCheckout} buttonText='Proceed to checkout' />
                <Button className='clear-cart' handleClick={clearCart} buttonText='Clear cart' />
            </>) : (<>
                <h2 className='no-items'>No items in cart</h2>
            </>)}
        </div>
    )
}

export default Cart;