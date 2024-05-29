import { useNavigate } from 'react-router-dom'
import './LogoIcon.style.css'
import { CuriousCat } from '../../assets'

const LogoIcon = () => {
    const router = useNavigate();

    const handleClickLogo = () => {
        router('/')
    }

    return (
        <div className='logo-icon' onClick={() => handleClickLogo()}>
            <CuriousCat />
        </div>
    )
}

export default LogoIcon