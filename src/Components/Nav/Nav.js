import './Nav.css';
import hamburgerlogo from './images/hamburger.png';
import logo from './images/logo.png';
import searchlogo from './images/search.png';
import { authenticate } from '../../utils/MoviedbAPI/tmdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import user from './images/user.png';
// import login from './images/login.png';

const Nav = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClick = () => {
        authenticate();
    };

    const handleLogout = () => {
        localStorage.removeItem('session_id');
        localStorage.removeItem('expires');
        localStorage.removeItem('user_id');
    };
    return (
        <div className='nav-container'>
            <nav className='nav'>
                <div className='hamburger-logo-search'>
                    <button className='hamburger' onClick={props.handleClick}>
                        <img src={hamburgerlogo} alt='sidebar-toggle' />
                    </button>
                    <div className='logo'>
                        <a href='/'>
                            <img src={logo} alt='logo' />
                        </a>
                    </div>
                    <div className='searchBox'>
                        <input className='searchInput' type='text' placeholder='Search' />
                        <button className='searchButton'>
                            <img src={searchlogo} alt='search' />
                        </button>
                    </div>
                </div>
                <div className='user-profile'>
                    <div className='seperator'>
                        <div className='line'></div>
                    </div>
                    <button className='notification'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                        </svg>
                    </button>
                    <div className='user-login'>
                    {props.isLoggedIn ? (
                        <div className='user'>
                            <button onClick={toggleDropdown}>
                                <FontAwesomeIcon className='faUser' icon={faUser} />
                            </button>
                            {isDropdownOpen && (
                                <div className='user-dropdown'>
                                    <a href='/'>Profile</a>
                                    <a href='/'>Watchlist</a>
                                    <a href='/' onClick={handleLogout}>Logout</a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className='login' alt='login' onClick={handleClick}>
                            <span>Login</span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                            </svg>
                        </button>
                    )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;