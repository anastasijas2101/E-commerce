import './Footer.style.css'
import logo1 from '../../../../assets/tc-logo.png'
import logo2 from '../../../../assets/wired-logo.png'
import logo3 from '../../../../assets/Consumer-Reports.png'
import logo4 from '../../../../assets/pc-logo.png'
import logo5 from '../../../../assets/engadget-logo.png'
import logo6 from '../../../../assets/electronics-logo.png'

const Footer = () => {
    return (
        <footer className='footer-style'>
            <img src={logo1} alt='TC-logo' />
            <img src={logo2} alt='WIRED-logo' />
            <img src={logo3} alt='CR-logo' />
            <img src={logo4} alt='PC-logo' />
            <img src={logo5} alt='EG-logo' />
            <img src={logo6} alt='EL-logo' />
        </footer>
    )
}

export default Footer