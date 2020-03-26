import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderSVG from './HeaderSVG'
import '../../assets/styles/Header.scss'
import GoBack from './GoBack';


const Header = (props) => {
    const langBtn = useStatus()
    const [show, setShow] = useState(null);

    useEffect(() => {
        if (!props.hideNavigation) {
            setShow (
                <React.Fragment>
                    <div className="logo">
                        <span>Cristian</span>
                        <div className={`logo-dot dot-${props.index}`}></div>
                    </div>
                    
                    <div className="navbar-i-group">
                        <a href="#me" className={`navbar-i home-${props.index}`}>Home</a>
                        <a href="#projects" className={`navbar-i projects-${props.index}`}>Projects</a>
                        <a href="#contact" className={`navbar-i contact-${props.index}`}>Contact</a>
                    </div>
                </React.Fragment>
            );
        }
        else if (props.showBack) {
            setShow(
                <React.Fragment>
                    < GoBack className="go-back-header"/>
                </React.Fragment>
            );
        }
        else{
            setShow(null)
        }
    },[props.hideNavigation, props.index, props.showBack])


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
            { show }
            
            <div className="lang">
                <button className="lang-btn" onClick={ langBtn.handleStatus }>En</button>
                <Link to="/es"  className={`lang-link-${langBtn.status}`}><span>Es</span></Link>
                < HeaderSVG index={props.index} />
            </div>
                    
        </nav>
    );
}

export default Header;