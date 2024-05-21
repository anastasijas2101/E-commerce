import Button from "../../components/Button/Button"
import './Home.style.css'
import headphones from '../../assets/headphones.png'
import Footer from "./components/footer/Footer"

const Home = () => {
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

export default Home