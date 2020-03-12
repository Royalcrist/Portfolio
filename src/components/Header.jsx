import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeMe from './containers/HomeMe';
import HomeProjects from './containers/HomeProjects';
import HomeContacts from './containers/HomeContact';
import HeaderSVG from './HeaderSVG'
import '../../assets/styles/Header.scss'


const Header = () => {
    const langBtn = useStatus()


    function useStatus (value) {
        const [ status, setStatus ] = useState('hide');

        function handleStatus(e) {
            status === 'hide' ? setStatus('show') : setStatus('hide');
        }

        return {
            handleStatus,
            status
        }
    }

    console.log(langBtn)

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="logo">
                    <span>Cristian</span>
                    <div className="logo-dot"></div>
                </div>
                

                <div className="navbar-i-group">
                    <Link to="/" className="navbar-i">Home</Link>
                    <Link to="/" className="navbar-i">Projects</Link>
                    <Link to="/" className="navbar-i">Contact</Link>
                </div>
                
                <div className="lang">
                    <button className="lang-btn" onClick={ langBtn.handleStatus }>En</button>
                    <Link to="/es"  className={`lang-link-${langBtn.status}`}><span>Es</span></Link>
                    < HeaderSVG />
                </div>
                
                
            </nav>
        </React.Fragment>
    );
}

export default Header;