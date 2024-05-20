import './CartIcon.style.css'
import cart from '../../assets/cart-icon.png'

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <img src={cart} alt='cartIcon' />
        </div>
    )
}

export default CartIcon