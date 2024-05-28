import { useState } from 'react';
import '../styles/FourthPage.style.css'
import FourthPageItem from './FourthPage.item';
import blackHeadphones from '../../../assets/black-headphones.png'

const FourthPage = () => {

    const [items, setItems] = useState([
        {
            img: blackHeadphones,
            title: 'Simple',
            text: 'Security Device with Monthly Service',
            price: 19
        },
        {
            img: blackHeadphones,
            title: 'Standard',
            text: 'Security Device with Monthly Service',
            price: 29
        },
        {
            img: blackHeadphones,
            title: 'Best Offer',
            text: 'Security Device with Monthly Service',
            price: 39
        }
    ])

    return (
        <div className='fourth-div'>
            <h1>Our Packages</h1>
            <div className='bottom-fourth-div'>
                {items.map((item) => (
                    <FourthPageItem
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default FourthPage;