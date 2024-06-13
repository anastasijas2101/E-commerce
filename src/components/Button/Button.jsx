import './Button.style.css'

const Button = ({ buttonText, handleClick, className }) => {
    return (
        <button className={`${className} button-style`} onClick={handleClick}>{buttonText}</button>
    )
}

export default Button