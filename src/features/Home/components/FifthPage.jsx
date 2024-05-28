import '../styles/FifthPage.style.css'
import Button from '../../../components/Button/Button'

const FifthPage = () => {
    return (
        <div className='full-page-div1'>
            <div className='top-page-div'>
                <h1>Product Information</h1>
                <div className='input-div'>
                    <input placeholder='Enter Your Email Here' />
                    <Button buttonText='Get Product Information' />
                </div>
            </div>
            <div className='bottom-page-div1'>
                <h1>Feature your best sellers</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered you
                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                    in the middle of text. All the Lorem Ipsum generators.</p>
                <div className='list-div'>
                    <ul>
                        <li>It uses a dictionary of over Latin words as necessary</li>
                        <li>Combined with handful of model sentence structure lorem</li>
                        <li>Lorem Ipsum which looks reasonable a handful</li>
                        <li>It uses a dictionary of over Latin words as necessary</li>
                        <li>Combined with handful of model sentence structure lorem</li>
                        <li>Lorem Ipsum which looks reasonable a handful</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FifthPage;