import Footer from "./footer/Footer"
import '../styles/FirstPage.style.css'
import MainPage from "./MainPage"

const FirstPage = () => {
    return (
        <>
            <div className="first-div">
                <MainPage />
                <Footer />
            </div>
        </>
    )
}

export default FirstPage;