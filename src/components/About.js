import '../css/about.scss'
import { FaAngleDown } from 'react-icons/fa'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


const About = () => {

    const paragraf = useRef();

    useEffect(() => {
        init(paragraf.current, {
            showCursor: true,
            loop: false,
            typeSpeed:  50,
            startDelay: 0,
            strings: ["I am a, hardworking, second year student at the International Burch University. I love developing web applications and websites. I am always eager to learn new skills and improve as a developer."]
        })
    }, [])

    return (
        <div id='about' className='about'>
            <div className="left">
                <div className="container-img">
                    <img src="images/profil.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I am Vedran Selak</h2>
                    <p><span ref={paragraf}></span></p>
                </div>
                <div className='down-icon' href="#portfolio">
                    <a href="#portfolio"><FaAngleDown /></a>
                </div>
            </div>
        </div>
    )
}

export default About
