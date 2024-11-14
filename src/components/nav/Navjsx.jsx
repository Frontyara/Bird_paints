import { useContext, useState } from "react"
import { ReduxStateContext } from "../../main"
import { NavLink } from "react-router-dom"

export default function Nav() {
    const [boolean, reverseBoolean] = useState(false)
    function reverseBool() {
        reverseBoolean(!boolean)
        if (boolean == true) {
            // document.querySelectorAll('.item')
        }
    }
    const context = useContext(ReduxStateContext)
    const contextItem = context.nav.item
    let contextItemLogo = context.nav.itemLogo
    console.log(boolean)

    return (
        <div className="nav">
            <div className="nav__content">
                <div className="logo"><span>Ink. House</span></div>
                <div className="line"></div>
                <ul className="nav__items">
                    <div className="item__burger" onClick={reverseBool}>
                        <div className="item__line"></div>
                        <div className="item__line"></div>
                        <div className="item__line"></div>
                    </div>
                    <li className="item__menu">
                        {contextItem.map((item, index) => {
                            return (
                                <li className="item">
                                    <NavLink to={item.to} key={index} className="navLink"><span>{item.text}</span></NavLink>
                                </li>
                            )
                        })}
                    </li>
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