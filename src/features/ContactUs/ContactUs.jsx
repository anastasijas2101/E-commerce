import './ContactUs.style.css'
import { PhoneIcon, LocationMark } from '../../assets'
import Button from '../../components/Button/Button'

const ContactUs = () => {
    return (
        <div className='contactUs-div'>
            <div className='left-contactUs-div'>
                <h1>Get in touch</h1>
                <p>Use our contact form for all information requests or
                    contact us directly using the contact information below.
                    <br /> <br />
                    Feel free to get in touch with us via email or phone
                </p>
                <hr />
                <div className='location-div'>
                    <LocationMark />
                    <div>
                        <h3>Our Office Location</h3>
                        <p>
                            The Interior Design Studio Company <br />
                            The Courtyard, Al Quoz 1, Colorado, USA
                        </p>
                    </div>
                </div>
                <div className='phone-div'>
                    <PhoneIcon />
                    <div>
                        <h3>Phone (Landline)</h3>
                        <p>+912 3 567 8987</p>
                    </div>
                </div>
            </div>
            <div className='right-contactUs-div'>
                <h3>Get started with a free quotation</h3>
                <div className='input-div'>
                    <div>
                        <p>Name</p>
                        <input type='text' placeholder='Enter your name'></input>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type='text' placeholder='Enter a valid email adress'></input>
                    </div>
                    <div>
                        <p>Message</p>
                        <textarea name='message' placeholder='Enter your message' />
                    </div>
                </div>
                <div className='checkbox-div'>
                    <input type='checkbox' />
                    <label>I accept the <span>Terms of Service</span></label>
                </div>
                <Button buttonText='Submit your request' />
            </div>
        </div>
    )
}

export default ContactUs