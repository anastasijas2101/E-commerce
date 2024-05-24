import Button from '../../../components/Button/Button';
import '../styles/ThirdPage.style.css'
import whiteHeadphones from '../../../assets/white-headphones.webp'

const ThirdPage = () => {
    return (
        <div className='full-div2'>
            <div className='left-div-style'>
                <h1>SHOWCASE APPS, INNOVATIVE TECH OR BUSINESSES.</h1>
                <p>Never be without the product you need! Sign up today to save money and time. Cancle anytime.</p>
                <Button buttonText='Sign Up' />
            </div>
            <div className='right-div-style'>
                <img src={whiteHeadphones} alt='WhiteHeadphones' />
            </div>
        </div>
    )
}

export default ThirdPage;