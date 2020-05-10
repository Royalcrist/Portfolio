import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../../assets/styles/Header.scss';
import SocialMedia from '../components/SocialMedia';
import useStatus from '../useStatus';
import UsaFlag from '../../assets/static/UsaFlag.png';
import SpainFlag from '../../assets/static/SpainFlag.png';
import LangArrow from '../LangArrow'
import Menu from '../../assets/static/Menu.svg';
import Close from '../../assets/static/Close.svg';



const Header = (props) => {
    const { github, linkedin } = props.socialMedia;
    const langBtn = useStatus();
    const [logo, setLogo] = useState(null);
    const [menu, setMenu] = useState(null);
    const [isActive, setIsActive] = useState(false);


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
    },[props.showLogo, props.index])

    useEffect(() => {
        if (!props.hideMenu) {
            setMenu(
                <>
                    <div className={`menu ${isActive ? 'active' : ''}`}>
                        <div className="navbar-i-group" style={ !props.showNav ? {display: "none"}: {}}>
                            <div className={`selected-box selected-${props.index}`}></div>
                            <HashLink to="/#me" className={`navbar-i ${props.index === 1 ? 'selected' : ''}`} onClick={() => {if (isActive) setIsActive(!isActive);}}>Home</HashLink>
                            <HashLink to="/#projects" className={`navbar-i ${props.index === 2 ? 'selected' : ''}`} onClick={() => {if (isActive) setIsActive(!isActive);}}>Projects</HashLink>
                            <HashLink to="/#contact" className={`navbar-i ${props.index === 3 ? 'selected' : ''}`} onClick={() => {if (isActive) setIsActive(!isActive);}}>Contact</HashLink>
                        </div>

                        <div className={`lang ${langBtn.status}`} onClick={ langBtn.handleStatus } >
                            <Link to={null} className={`item ${props.color}`}>
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
                        <div className="media-container-nav">
                            < SocialMedia media={ github }/>
                            < SocialMedia media={ linkedin }/>
                        </div>
                    </div>

                    <button className={`menu-btn ${isActive ? 'active' : ''}`} onClick={() => {setIsActive(!isActive)}}>
                        <img src={!isActive ? Menu : Close} alt="Menu icon"/>
                    </button>
                </>
            );
        }
        else{
            setMenu(null);
        }
    },[props.hideMenu, props.index, isActive, langBtn.status, props.color, props.socialMedia])

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className={`nav-bg ${props.hideBg ? 'hide-bg' : ''}`}></div>
            
            { logo }

            { menu }

        </nav>
    );
}

export default Header;