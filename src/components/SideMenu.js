import '../css/sidemenu.scss'
import SideMenuItem from './SideMenuItem'

const SideMenu = ({ sideMenuOpened, sideMenuToggle }) => {
    return (
        <div className={ sideMenuOpened ? 'sidemenu active' : 'sidemenu'}>
            <ul>
                <SideMenuItem sideMenuToggle={sideMenuToggle} title='About' link='#about' />
                <SideMenuItem sideMenuToggle={sideMenuToggle} title='Portfolio' link='#portfolio' />
                <SideMenuItem sideMenuToggle={sideMenuToggle} title='Contact Me' link='#contact-me' />
            </ul>
        </div>
    )
}

export default SideMenu
