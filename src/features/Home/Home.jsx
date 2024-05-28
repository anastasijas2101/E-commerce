import './Home.style.css'
import FifthPage from './components/FifthPage'
import FirstPage from './components/FirstPage'
import FourthPage from './components/FourthPage'
import SecondPage from './components/SecondPage'
import SixthPage from './components/SixthPage'
import ThirdPage from './components/ThirdPage'

const Home = () => {
    return (
        <>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage />
            <SixthPage />
        </>
    )
}

export default Home