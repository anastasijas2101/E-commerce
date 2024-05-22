import Footer from "./footer/Footer"
import Button from "../../../components/Button/Button"
import headphones from '../../../assets/headphones.png'
import '../styles/FirstPage.style.css'

const FirstPage = () => {
    return (
        <>
            <div className="full-div">
                <div className="right-div">
                    <div className="left-div">
                        <h1>Fresh Beautiful. Innovative.</h1>
                        <hr />
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour.
                        </p>
                        <Button buttonText="Order Now" />
                    </div>
                    <img src={headphones} alt="headphonesImage" />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default FirstPage;