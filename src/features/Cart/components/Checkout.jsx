import './Checkout.style.css'
import Button from '../../../components/Button/Button'
import lockIcon from '../../../assets/lock-icon.png'

const Checkout = () => {
    return (
        <div className='checkout-div'>
            <div className='delivery-address-div'>
                <h4>Delivery Address</h4>
                <div className='first-last-name'>
                    <input type='text' placeholder='First name' />
                    <input type='text' placeholder='Last name' />
                </div>
                <input type='text' placeholder='Street Address' />
                <input type='text' placeholder='Apt/Suite/Floor(Optional)' />
                <div className='city-state-ZIP-div'>
                    <input type='text' placeholder='City' />
                    <select>
                        <option>State</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>UK</option>
                    </select>
                    <input type='text' placeholder='ZIP Code' />
                </div>
                <div className='checkbox-billing-address-div'>
                    <input className='checkbox-billing' type='checkbox' />
                    <p>Use as billing address</p>
                </div>
            </div>
            <div className='contact-info-div'>
                <h4>Contact Info</h4>
                <div className='email-phone-div'>
                    <input type='text' placeholder='Email for Order Tracking' />
                    <input type='text' placeholder='Phone for Delivery Contact' />
                </div>
                <div className='privacy-div'>
                    <img src={lockIcon} alt='lock-icon' />
                    <p>Your privacy is important to us. View our privacy policy here. We'll only contact you
                        if there's an issue with your order. <br />
                        <span>We'll also look for coupons associated with your email and phone number</span>
                    </p>
                </div>
                <div className='text-alerts-checkbox-div'>
                    <input className='text-alerts' type='checkbox' />
                    <p>Get text alerts for your order on your mobile</p>
                </div>
            </div>
            <Button buttonText='Proceed to Savings & Payments' />
        </div>
    )
}

export default Checkout;