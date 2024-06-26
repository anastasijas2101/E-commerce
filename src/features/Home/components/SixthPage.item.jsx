import '../styles/SixthPage.style.css'

const SixthPageItem = ({ img, text, author }) => {
    return (
        <div className='sixth-item-div'>
            <img src={img} alt='clientIcon' />
            <p>{text}</p>
            <h3>{author}</h3>
        </div>
    )
}

export default SixthPageItem;