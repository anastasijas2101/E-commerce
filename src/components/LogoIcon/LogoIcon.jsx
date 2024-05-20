import { useNavigate } from 'react-router-dom'
import logo from '../../assets/curious-cat.png'
import './LogoIcon.style.css'

const LogoIcon = () => {
    const router = useNavigate();

    const handleClickLogo = () => {
        router('/')
    }

    return (
        <div className='logo-icon' onClick={() => handleClickLogo()}>
            <img src={logo} alt='curiousCatLogo' />
        </div>
    )
}

export default LogoIcon