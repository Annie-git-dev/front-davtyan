import useHideOnScroll from '../../hooks/useHideOnScroll'
import './Menu.css'
import { menuItems } from '../../constants'
import ChevronDown from '../../assets/icons/chevron_down.png'
import ChevronRight from '../../assets/icons/chevron_right.png'

export default function Menu() {
    const hidden = useHideOnScroll(200)

    return (
        <nav className={`menu ${hidden ? 'menu--hidden' : ''}`}>
            <div className="container menu-inner">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.title} &nbsp;
                            {item.subItems.length > 0 && 
                               <img src={ChevronDown} alt="ChevronDown" className="chevron" />
                            }
                            {item.subItems.length > 0 && (
                                <ul className="submenu">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            {subItem} &nbsp;
                                            <img src={ChevronRight} alt="ChevronDown" className="chevron" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
