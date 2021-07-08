import '../css/contactme.scss'
import emailjs from 'emailjs-com';
import env from 'react-dotenv'
import { useState } from 'react';
import Footer from './Footer'

const ContactMe = () => {

    const [alertSuccess, setAlertSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = (typeof env === 'undefined' ? '' : env.USER_ID)
        const serviceId = (typeof env === 'undefined' ? '' : env.SERVICE_ID)
        const templateId = (typeof env === 'undefined' ? '' : env.TEMPLATE_ID)
        

        emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
            setAlertSuccess(true)
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()

        setTimeout(() => {
            setAlertSuccess(false)
          }, 5000);
    }


    return (
        <div id='contact-me' className="contact-me">
            <div className="wrapper">
                <div className="container">
                    <h3>Contact Me:</h3>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Email' name='email' />
                        <textarea placeholder='Message' name='message'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                    {alertSuccess ? <div className='alert'>Your message has been sent!</div> : ''}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactMe
