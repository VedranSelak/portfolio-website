import '../css/topnav.scss';

const Topnav = ({ sideMenuOpened, sideMenuToggle }) => {
    return (
        <header className={sideMenuOpened ? "topnav active" : "topnav"}>
            <a href="#about" className='name'>[<span className='text-blue'>root</span>@<span className='text-red'>vedran-selak</span> me]$ <span className='text-yellow'>npm</span> start</a>
            <div className="topnav_menu" onClick={() => sideMenuToggle(!sideMenuOpened)}>
                <span className='topnav_menu_burger'></span>
            </div>
        </header>
    )
}

export default Topnav
