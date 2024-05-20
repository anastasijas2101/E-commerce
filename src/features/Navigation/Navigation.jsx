import { Link } from "react-router-dom"
import './Navigation.style.css'
import LogoIcon from "../../components/LogoIcon/LogoIcon"
import CartIcon from "../../components/CartIcon/CartIcon"

const Navigation = () => {
    return (
        <nav>
            <div className="navigation-style">
                <LogoIcon />
                <div className="navigation-links">
                    <Link to={{ pathname: '/' }}>Home</Link>
                    <Link to={{ pathname: '/products' }}>Products</Link>
                    <Link to={{ pathname: '/howToOrder' }}>How To Order?</Link>
                    <Link to={{ pathname: '/aboutUs' }}>About Us</Link>
                    <Link to={{ pathname: '/contactUs' }}>Contact Us</Link>
                </div>
                <CartIcon />
            </div>
        </nav>
    )
}

export default Navigation