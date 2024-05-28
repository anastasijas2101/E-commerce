import Button from '../../../components/Button/Button'
import '../styles/FourthPage.style.css'

const FourthPageItem = ({ img, title, text, price }) => {
    return (
        <div className='fourth-item-div'>
            <img src={img} alt="headphonesIcon" />
            <h3>{title}</h3>
            <p>{text}</p>
            <h3>${price}</h3>
            <Button buttonText='Shop Now' />
        </div>
    )
}

export default FourthPageItem;