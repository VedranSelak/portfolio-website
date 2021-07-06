import '../css/topnav.scss'

const Topnav = ({ sideMenuOpened, sideMenuToggle }) => {
    return (
        <div className={sideMenuOpened ? "topnav active" : "topnav"}>
            <div className="wrapper">
                <div>
                    <a href="#about" className='name'>[<span className='text-blue'>root</span>@<span className='text-red'>vedran-selak</span> me]$ <span className='text-yellow'>npm</span> start</a>
                </div>
                <div>
                    <div className="side-menu" onClick={() => sideMenuToggle(!sideMenuOpened)}>
                        <span className='first-line'></span>
                        <span className='second-line'></span>
                        <span className='third-line'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnav
