import './ContactUs.style.css'
import location from '../../assets/location-mark.png'
import phone from '../../assets/phone-icon.png'

const ContactUs = () => {
    return (
        <div>
            <div>
                <h1>Get in touch</h1>
                <p>Use our contact form for all information requests or
                    contact us directly using the contact information below.
                    <br /> <br />
                    Feel free to get in touch with us via email or phone
                </p>
                <hr />
                <div>
                    <img src={location} alt='locationMark' />
                    <div>
                        <h3>Our Office Location</h3>
                        <p>
                            The Interior Design Studio Company <br />
                            The Courtyard, Al Quoz 1, Colorado, USA
                        </p>
                    </div>
                </div>
                <div>
                    <img src={phone} alt='phoneIcon' />
                    <div>
                        <h3>Phone (Landline)</h3>
                        <p>+912 3 567 8987</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Get started with a free quotation</h1>
            </div>
        </div>
    )
}

export default ContactUs