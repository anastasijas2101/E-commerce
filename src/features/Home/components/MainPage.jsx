import '../styles/MainPage.style.css'
import Button from '../../../components/Button/Button';
import { MainHeadphones } from '../../../assets';

const MainPage = () => {
    return (
        <div className="first-right-div">
            <div className="first-left-div">
                <h1>Fresh Beautiful. Innovative.</h1>
                <hr />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour.
                </p>
                <Button buttonText="Order Now" />
            </div>
            <MainHeadphones />
        </div>
    )
}

export default MainPage;