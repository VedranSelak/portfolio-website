import '../css/portfolio.scss'
import { FaCode, FaDatabase } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolio'>
            <h1>Skills</h1>
            <div className='wrapper'>
                <div className="left">
                    <div className="header-icon">
                        <FaCode />
                    </div>
                    <h4>Front-End Development</h4>
                    <p>I love coding something from scratch, and the process of developing something brings me joy.</p>
                    <h5>Languages I use:</h5>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            JavaScript 
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            React.js
                        </li>
                        <li>
                            jQuery
                        </li>
                    </ul>
                </div>
                <div className="center">
                    <div className="header-icon">
                        <FaDatabase />
                    </div>
                    <h4>Back-End Development</h4>
                    <p>I love coding something from scratch, and the process of developing something brings me joy.</p>
                    <h5>Languages I use:</h5>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            JavaScript 
                        </li>
                    </ul>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}

export default Portfolio
