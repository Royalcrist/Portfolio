import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSVG from './HeaderSVG'
import '../../assets/styles/Header.scss'


const Header = (props) => {
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

    return (
        <nav className="navbar">
            <div className="logo">
                <span>Cristian</span>
                <div className={`logo-dot dot-${props.index}`}></div>
            </div>

            <div className="navbar-i-group">
                <Link to="/" className={`navbar-i home-${props.index}`}>Home</Link>
                <Link to="/" className={`navbar-i projects-${props.index}`}>Projects</Link>
                <Link to="/" className={`navbar-i contact-${props.index}`}>Contact</Link>
            </div>
            
            <div className="lang">
                <button className="lang-btn" onClick={ langBtn.handleStatus }>En</button>
                <Link to="/es"  className={`lang-link-${langBtn.status}`}><span>Es</span></Link>
                < HeaderSVG index={props.index} />
            </div>
                    
        </nav>
    );
}

export default Header;