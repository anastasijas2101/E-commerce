import './AboutUs.style.css'
import { FirstGroupPhoto, SecondGroupPhoto, ThirdGroupPhoto } from '../../assets'

const AboutUs = () => {
    return (
        <div className='aboutUs-div'>
            <div className='top-aboutUs-div'>
                <div>
                    <h1>About Us</h1>
                    <p>HubSpot's company and culture are a lot like our product. They're crafted, not cobbled, for a delightful experience.</p>
                </div>
                <FirstGroupPhoto />
            </div>
            <div className='middle-aboutUs-div'>
                <SecondGroupPhoto />
                <div>
                    <h2>Our Mission: Helping Millions of Organizations Grow Better</h2>
                    <p>We believe not just in growing bigger, but in growing better. Growing better means aligning the success of
                        your own business with the success of your customers. Win-Win!
                    </p>
                </div>
            </div>
            <div className='bottom-aboutUs-div'>
                <div>
                    <h2>Our Story</h2>
                    <p>
                        In 2004. follow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way
                        people shop and purchase products. Buyers didn't want to be interrupted by ads, they wanted helpful information.
                        In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
                        <br />
                        <br />
                        Along the way, HubSpot expanded beyond marketing into crafted, not cobbled suite od products that create the
                        frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its
                        customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better
                    </p>
                </div>
                <ThirdGroupPhoto />
            </div>
        </div>
    )
}

export default AboutUs