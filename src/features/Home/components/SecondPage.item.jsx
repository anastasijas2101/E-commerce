import '../styles/SecondPage.style.css'

const SecondPageItem = ({ img, title, text }) => {
    return (
        <div className="item-div">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default SecondPageItem;