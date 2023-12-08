import React from 'react'
import { FaFacebook, FaInstagram , FaTwitter } from 'react-icons/fa'


const Contact = () => {
    return (
    <div className='Contact-section'>

            <h1 className='Contact-heading'>Contact Us</h1>
 
            <p> We're here to assist you in any way we can. Feel free to reach out to us with your inquiries, feedback, or concerns. Our dedicated team is ready to help.</p>

    
            <div className='contact-details'>
                <span className='d-flex flex-column  justify-content-center '>
                    <h6>Customer Support:</h6>
                    <a className="text-decoration-none " href="/">Email: support@shopify.com </a>

                    <p> Business Hours: </p>
                    <p> Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                    <p> Saturday: 10:00 AM - 3:00 PM  (EST)</p>
                    <p> Sunday: Closed</p>  </span>

                <span className='d-flex flex-column  justify-content-center '> <h6>Headquarters: </h6>
                    <p>1234 Elm Street,
                        Cityville, ABC 56789,
                        Country </p>

                    <h6> Phone:</h6>
                    <a className="text-decoration-none " href="/"> Toll-Free: 1-800-123-4567 </a> <br />
                    <a className="text-decoration-none " href="/">  Local: 555-789-1234 </a>
                    <h6>  Landline: </h6>

                    <a className="text-decoration-none " href="/">  Main Office: 555-987-6543 </a>  </span> </div>
         

      <p>      For media inquiries or partnership opportunities, please email us at partnerships@shopify.com.

Follow us on social media for the latest updates and promotions:
</p>

      <span className=''>
      <a className="text-decoration-none  m-2" href="/"> <FaFacebook className='fs-3 text-secondary'/>  Facebook: @ShopiFYofficial </a>
            <a className="text-decoration-none  m-2" href="/">  <FaInstagram className='fs-3 text-secondary'/> Instagram: @ShopiFY.gram </a>
            <a className="text-decoration-none  m-2" href="/">  <FaTwitter className='fs-3 text-secondary'/> Twitter: @ShopiFYtweets </a>

      </span>
            
        </div>
    )
}

export default Contact
