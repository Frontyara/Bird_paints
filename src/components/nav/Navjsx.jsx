import { useContext } from "react"
import { ReduxStateContext } from "../../main"
import { NavLink } from "react-router-dom"

export default function Nav() {
    const context = useContext(ReduxStateContext)
    const contextItem = context.nav.item
    let contextItemLogo = context.nav.itemLogo

    return (
        <div className="nav">
            <div className="nav__content">
                <div className="logo"><span>Ink. House</span></div>
                <div className="line"></div>
                <ul className="nav__items">
                    {contextItem.map((item, index) => {
                        return (
                            <li className="item">
                                <NavLink to={item.to} key={index} className="navLink"><span>{item.text}</span></NavLink>
                            </li>
                        )
                    })}
                    {contextItemLogo.map((item, index) => {
                        return (
                            <li>
                                <NavLink key={index} to={item.to}><img src={item.src} alt="src" className="img" /></NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}