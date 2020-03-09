import React from 'react';
import { Link } from 'react-router-dom';
import HomeMe from './containers/HomeMe';
import HomeProjects from './containers/HomeProjects';
import HomeContacts from './containers/HomeContact';


const Header = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <span className="logo">Cristian <span className="logo logo-dot">.</span> </span>

                <Link to="/" component={HomeMe} className="navbar-item">Home</Link>
                <Link to="/" component={HomeProjects} className="navbar-item">Projects</Link>
                <Link to="/" component={HomeContacts} className="navbar-item">Contact</Link>

                <div className="dropdown lang">
                    <button className="lang-btn">En</button>
                    <Link to="/es"  className="lang-link">es</Link>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;