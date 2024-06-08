import Button from '../../../components/Button/Button';
import '../styles/ThirdPage.style.css'
import { WhiteHeadphones } from '../../../assets';

const ThirdPage = () => {
    return (
        <div className='third-div'>
            <div className='inner-third-div'>
                <div className='left-third-div'>
                    <h1>SHOWCASE APPS, INNOVATIVE TECH OR BUSINESSES.</h1>
                    <p>Never be without the product you need! Sign up today to save money and time. Cancle anytime.</p>
                    <Button buttonText='Sign Up' />
                </div>
                <div className='right-third-div'>
                    <WhiteHeadphones />
                </div>
            </div>
        </div>
    )
}

export default ThirdPage;