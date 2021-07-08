import '../css/contactme.scss'
import{ init } from 'emailjs-com';
init("");

const ContactMe = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(process.env)

        // emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        // .then((result) => {
        //     alert("Message Sent, We will get back to you shortly", result.text);
        // },
        // (error) => {
        //     alert("An error occurred, Please try again", error.text);
        // });
    }


    return (
        <div id='contact-me' className="contact-me">
            <div className="container">
                <h3>Contact Me:</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
