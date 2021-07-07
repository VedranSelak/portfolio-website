import '../css/portfolioList.scss'

const PortfolioList = ({ id, title, isActive, setActive}) => {

    return (
        <li className={isActive ? 'portfolioList active' : 'portfolioList'} onClick={() => setActive(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
