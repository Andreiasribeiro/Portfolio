import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {

    //update the state
    const [click, setclick] = useState(false);

    //Reversing the state menu
    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        AR
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* Font awesome fas fa-times = hamburg menu, fas fa-bars=bars menu */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* On the mobile, when clicking on the name the menu is deactivated */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutme' className="nav-links" onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/mywork' className="nav-links" onClick={closeMobileMenu}>
                                My Work
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/userinterfaces' className="nav-links" onClick={closeMobileMenu}>
                                Web Applications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/illustrations' className="nav-links" onClick={closeMobileMenu}>
                                Illustrations
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar

