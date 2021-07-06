

const SideMenuItem = ( {sideMenuToggle, title, link} ) => {
    return (
        <li onClick={() => sideMenuToggle(false)}>
            <a href={link}>{title}</a>
        </li>
    )
}

export default SideMenuItem
