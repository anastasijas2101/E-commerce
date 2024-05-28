import { useState } from 'react';
import '../styles/SecondPage.style.css'
import info from '../../../assets/info-icon.png'
import headphones1 from '../../../assets/headphones-icon.webp'
import headphones2 from '../../../assets/headphones-icon2.png'
import SecondPageItem from './SecondPage.item';

const SecondPage = () => {

    const [component, setComponent] = useState([
        {
            image: info,
            title: 'Free Updates',
            text: 'It uses dictionary over 200 Latin the words, combined with a handfull of model sentence with structure.'
        },
        {
            image: headphones1,
            title: 'Easy to use',
            text: 'It uses dictionary over 200 Latin the words, combined with a handfull of model sentence with structure.'
        },
        {
            image: headphones2,
            title: 'Trendy design',
            text: 'It uses dictionary over 200 Latin the words, combined with a handfull of model sentence with structure.'
        }
    ])

    return (
        <>
            <div className="second-div">
                <h2>Beautiful presentations made easy.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam adipisci vero perferendis soluta pariatur ipsum quas dolorem obcaecati quo.
                    Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className='bottom-second-div'>
                    {component.map((item) => (
                        <SecondPageItem
                            img={item.image}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SecondPage;