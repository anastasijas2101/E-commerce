import { items } from '../../data/itemsdata'
import './Products.style.css'
import Product from './components/Product'

const Products = () => {
    return (
        <div className='products-div'>
            {items.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Products