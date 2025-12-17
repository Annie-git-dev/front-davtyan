import { useState, useEffect, useRef } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';
import Logo from '../../assets/icons/logo.png';
import SearchIcon from '../../assets/icons/search.png';
import MenuIcon from '../../assets/icons/menu.png';
import MobileMenu from '../Menu/MobileMenu';

export default function Header({ onSearchChange }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchRef = useRef(null);

  const handleSearchClick = () => setSearchOpen(prev=> !prev);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <img
            src={MenuIcon}
            alt="Menu"
            className="menu-icon"
            onClick={() => setMobileMenuOpen(true)}
          />

          <img src={Logo} alt="Logotype" className="logo" />

          <div className="header-search" ref={searchRef}>
            <img
              src={SearchIcon}
              alt="Search"
              className="search-icon"
              onClick={handleSearchClick}
            />
            {searchOpen && (
              <input
                type="text"
                placeholder="Search post..."
                value={searchInput}
                onChange={handleInputChange}
                className="header-search-input"
                autoFocus
              />
            )}
          </div>
        </div>
      </div>

      <nav className="menu">
        <div className="container menu-inner">
          <Menu />
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
