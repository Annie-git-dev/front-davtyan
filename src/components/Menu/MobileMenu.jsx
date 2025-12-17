import { useState } from 'react';
import { menuItems } from '../../constants';
import './MobileMenu.css';
import ChevronDown from '../../assets/icons/chevron_down.png';
import ChevronRight from '../../assets/icons/chevron_right.png';
import Close from '../../assets/icons/close.png';
import Logo from '../../assets/icons/logo.png';

export default function MobileMenu({ isOpen, onClose }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = index => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose}></div>
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <img src={Logo} alt="Logo" />
          <button className="close-btn" onClick={onClose}><img src={Close} alt="Close" /></button>
        </div>
        <hr />
        <ul className="mobile-menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="menu-item" onClick={() => item.subItems.length && toggleSubmenu(index)}>
                {item.title}&nbsp;
                {item.subItems.length > 0 && <img src={ChevronDown} alt="Chevron" />}
              </div>
              {item.subItems.length > 0 && openSubmenu === index && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      {subItem} <img src={ChevronRight} alt="ChevronRight" />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
