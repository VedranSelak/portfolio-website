import '../css/portfolio.scss'
import PortfolioList from './PortfolioList'
import { FaGithub } from 'react-icons/fa'
import { GiWireframeGlobe } from 'react-icons/gi'
import { useState, useEffect } from 'react'
import { allPortfolio, webAppPortfolio, websitePortfolio, mobilePortfolio, otherPortfolio } from '../projects'


const Portfolio = () => {

    const [active, setActive] = useState('all')
    const [list, setList] = useState([])

    const myPortfolio = [
        {
            id: "all",
            title: "All",
        },
        {
            id: "web-app",
            title: "Web App",
        },
        {
            id: "website",
            title: "Website",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "other",
            title: "Other Cool Stuff",
        }
    ]

    useEffect(() => {
        switch(active) {
            case 'all':
                setList(allPortfolio)
                break
            case 'web-app':
                setList(webAppPortfolio)
                break
            case 'website':
                setList(websitePortfolio)
                break
            case 'mobile':
                setList(mobilePortfolio)
                break
            case 'other':
                setList(otherPortfolio)
                break
            default:
                setList(allPortfolio)
                break
        }
    }, [active])

    return (
        <div id='portfolio' className='portfolio'>
            <h1>My Projects</h1>
            <ul>
                {myPortfolio.map((item) => (<PortfolioList id={item.id} title={item.title} isActive={active === item.id ? true : false} setActive={setActive} />))}
            </ul>
            <div className="container">
               {list.map((item) => (
                    <div className="item">
                    <div className="about-project">
                        <h4>{item.title}</h4>
                         <div className="icon-container">
                            <a href={item.github} target="_blank" rel="noopener noreferrer" className='icon'>
                                <FaGithub />
                            </a>
                            {item.web === '' ? '' : <a href={item.web} target="_blank" rel="noopener noreferrer" className='icon'>
                                <GiWireframeGlobe />
                            </a>}
                        </div>
                    </div>
                    <img src={item.img} alt="" />
                </div>
               ))}
            </div>
        </div>
    )
}

export default Portfolio
