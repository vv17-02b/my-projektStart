import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaSun, FaMoon } from 'react-icons/fa';

const menuItems = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Services', id: 'services' },
    { title: 'Contact', id: 'contact' },
];

const dummySubLinks = [
    'Sub Link 1',
    'Sub Link 2',
    'Sub Link 3',
];

function Header({ toggleTheme, isDark }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactsOpen, setContactsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <header className="header">
            <div className="container header__container">
                <a href="#home" className="header__logo">
                    <img src="/src/assets/logo.jpg" alt="Logo" />
                </a>
              
                <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
                    {menuItems.map(({ title, id }) => (
                        <div
                            key={id}
                            className="nav__item"
                            onMouseEnter={() => setOpenDropdown(id)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <a href={`#${id}`}>{title}</a>
                            {openDropdown === id && (
                                <div className="dropdown__menu">
                                    {dummySubLinks.map((item, index) => (
                                        <a key={index} href={`#${id}-sub-${index}`}>
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="nav__item">
                        <button className="dropdown__btn" onClick={() => setContactsOpen(!contactsOpen)}>
                            Contact us
                        </button>
                        {contactsOpen && (
                            <div className="dropdown__menu">
                                <a href="tel:+380000000000"><FaPhone /> +38 (000) 000-00-00</a>
                                <a href="tel:+380111111111"><FaPhone /> +38 (111) 111-11-11</a>
                            </div>
                        )}
                    </div>

                    <button className="theme-btn" onClick={toggleTheme}>
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                </nav>

                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
}

export default Header;
