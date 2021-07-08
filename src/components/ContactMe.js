import '../css/contactme.scss'
import emailjs from 'emailjs-com';
import env from 'react-dotenv'

const ContactMe = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const userId = env.USER_ID
        const serviceId = env.SERVICE_ID
        const templateId = env.TEMPLATE_ID
        

        emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }


    return (
        <div id='contact-me' className="contact-me">
            <div className="container">
                <h3>Contact Me:</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email' name='email' />
                    <textarea placeholder='Message' name='message'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
