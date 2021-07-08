import '../css/footer.scss'
import { FaGithub } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="icons">
                <div className="icon">
                    <a href="https://github.com/VedranSelak" target='_blank' rel="noreferrer"><FaGithub /></a>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/vedran-selak-8a850720a/" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer
