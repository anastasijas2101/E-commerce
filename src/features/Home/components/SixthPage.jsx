import { useState } from 'react';
import '../styles/SixthPage.style.css'
import man1 from '../../../assets/man1.jpg'
import man2 from '../../../assets/man2.jpg'
import man3 from '../../../assets/man3.jpg'
import SixthPageItem from './SixthPage.item';


const SixthPage = () => {

    const [clients, setClients] = useState([
        {
            img: man1,
            text: 'All the Lorem Ipsum generators on the chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over.',
            author: 'JOHN SMITH'
        },
        {
            img: man2,
            text: 'All the Lorem Ipsum generators on the chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over.',
            author: 'STEVEN HILL'
        },
        {
            img: man3,
            text: 'All the Lorem Ipsum generators on the chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over.',
            author: 'DAVID JACKSON'
        }
    ])

    return (
        <div className='sixth-div'>
            <h1>What Our Clients Say</h1>
            <div className='client-sixth-div'>
                {clients.map((client) => (
                    <SixthPageItem
                        img={client.img}
                        text={client.text}
                        author={client.author}
                    />
                ))}
            </div>
        </div>
    )
}

export default SixthPage;