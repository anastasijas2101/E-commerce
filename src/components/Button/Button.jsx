import './Button.style.css'

const Button = ({ buttonText, handleClick }) => {
    return (
        <button className='button-style' onClick={handleClick}>{buttonText}</button>
    )
}

export default Button