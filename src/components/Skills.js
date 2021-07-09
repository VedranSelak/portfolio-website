import '../css/skills.scss'
import { FaCode, FaDatabase, FaAndroid, FaHtml5, FaJsSquare, FaCss3Alt, FaReact, FaPhp, FaJava } from 'react-icons/fa'
import { SiJquery, SiAndroidstudio } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'



const Skills = () => {

    return (
        <div id='skills' className='skills'>
            <h1>My skill set</h1>
            <div className='wrapper'>
                <div className="left-skill">
                    <div className="header-icon">
                        <FaCode />
                    </div>
                    <h4 className='skill-header'>Front-End Development</h4>
                    <p className='description'>I love coding something from scratch, and the process of developing something brings me joy.</p>
                    <h5>Languages I use:</h5>
                    <ul>
                        <li>
                            <FaHtml5 /> HTML
                        </li>
                        <li>
                            <FaJsSquare /> JavaScript 
                        </li>
                        <li>
                            <FaCss3Alt /> CSS
                        </li>
                        <li>
                            <FaReact /> React
                        </li>
                        <li>
                            <SiJquery /> jQuery
                        </li>
                    </ul>
                </div>
                <div className="center">
                    <div className="header-icon">
                        <FaDatabase />
                    </div>
                    <h4 className='skill-header'>Back-End Development</h4>
                    <p className='description'>I value back-end development because it is the backbone of the application that I am building.</p>
                    <h5>Tools I use:</h5>
                    <ul>
                        <li>
                            <AiOutlineConsoleSql /> SQL
                        </li>
                        <li>
                           <FaPhp /> PHP 
                        </li>
                        <li>
                            Flight PHP 
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className="header-icon">
                        <FaAndroid />
                    </div>
                    <h4 className='skill-header'>Mobile Development</h4>
                    <p className='description'>I like building mobile apps because they are a great way to interact with a larger audience.</p>
                    <h5>Tools I use:</h5>
                    <ul>
                        <li>
                            <FaJava /> Java
                        </li>
                        <li>
                           <SiAndroidstudio /> Android Studio 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
