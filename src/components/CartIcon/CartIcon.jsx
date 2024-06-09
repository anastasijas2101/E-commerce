import './CartIcon.style.css'
import { CartIconLogo } from '../../assets'
import { useCartStore } from '../../stores/cart.store'

const CartIcon = ({ handleClick }) => {
    const { cart } = useCartStore();

    return (
        <div className='cart-icon' onClick={handleClick}>
            <span>{cart.length}</span>
            <CartIconLogo />
        </div>
    )
}

export default CartIcon