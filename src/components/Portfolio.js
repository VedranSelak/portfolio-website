import '../css/portfolio.scss'

const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>All</li>
                <li>Web App</li>
                <li>Website</li>
                <li>Mobile App</li>
                <li>Cool stuff</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="./images/askIbuPic.PNG" alt="" />
                </div>
                <div className="item">
                    <img src="./images/portfolioPic.PNG" alt="" />
                </div>
                <div className="item mobile">
                    <img src="./images/tutorMePic.PNG" alt="" />
                </div>
                <div className="item">
                    <img src="./images/wormGame.PNG" alt="" />
                </div>
                <div className="item">
                    <img src="./images/doungenGame.PNG" alt="" />
                </div>
                <div className="item">
                    <img src="./images/cScript.PNG" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
