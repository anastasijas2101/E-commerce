import './Product.style.css'
import Button from '../../../components/Button/Button'
import ratingStars from '../../../assets/rating-stars.png'
import favoriteIcon from '../../../assets/favorite-heart.webp'
import { useCartStore } from '../../../stores/cart.store'

const Product = ({ item }) => {
    const { addItemToCart } = useCartStore();

    const handleAdd = (item) => {
        addItemToCart(item);
    }

    return (
        <div className='product-div'>
            <img className='item-image' src={item.image} alt='productImage' />
            <div className='title-div'>
                <h3>{item.name}</h3>
                <h3>${item.price}</h3>
            </div>
            <p>{item.description}</p>
            <img className='rating-stars' src={ratingStars} alt='ratingStars' />
            <Button buttonText='Add to Cart' handleClick={() => handleAdd(item)} />
        </div>
    )
}

export default Product