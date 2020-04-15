import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../../assets/styles/Header.scss';
import GoBack from './GoBack';
import useStatus from '../useStatus';
import UsaFlag from '../../assets/static/UsaFlag.png';
import SpainFlag from '../../assets/static/SpainFlag.png';
import LangArrow from '../LangArrow'



const Header = (props) => {
    const langBtn = useStatus();
    const [logo, setLogo] = useState(null);
    const [back, setBack] = useState(null);


    useEffect(() => {
        if (props.showLogo) {
            setLogo (
                <React.Fragment>
                    <div className="logo">
                        <span>cristian</span>
                        <div className={`logo-dot dot-${props.index}`}></div>
                    </div>
                </React.Fragment>
            );
        }
        else{
            setLogo(null);
        }
    },[props.hideLogo])

    useEffect(() => {
        if (props.showBack) {
            setBack(
                <div className="go-back-header">
                    < GoBack/>
                </div>
            );
        }
        else{
            setBack(null);
        }
    },[props.showBack])

    return (
        <nav className="navbar">
            <div className="nav-bg"></div>
            
            { logo }

            { back }

            <div className="menu">
                <div className="navbar-i-group" style={ !props.showNav ? {display: "none"}: {}}>
                    <div className={`selected-box selected-${props.index}`}></div>
                    <HashLink to="/#me" className={`navbar-i ${props.index === 1 ? 'selected' : ''}`}>Home</HashLink>
                    <HashLink to="/#projects" className={`navbar-i ${props.index === 2 ? 'selected' : ''}`}>Projects</HashLink>
                    <HashLink to="/#contact" className={`navbar-i ${props.index === 3 ? 'selected' : ''}`}>Contact</HashLink>
                </div>

                <div className={`lang ${langBtn.status}`} onClick={ langBtn.handleStatus } >
                    <Link className={`item ${props.color}`}>
                        <div>
                            <img src={ UsaFlag } alt="USA Flag" />
                            <p>English</p>
                            < LangArrow className="arrow" />
                        </div>
                    </Link>
                    <Link to="/es" className={`item ${langBtn.status}`}>
                        <div>
                            <img src={ SpainFlag } alt="Spain Flag" />
                            <p>Spanish</p>
                        </div>
                    </Link>
                </div>
            </div>

            
        </nav>
    );
}

export default Header;