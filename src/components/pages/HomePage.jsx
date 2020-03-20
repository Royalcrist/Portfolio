import React, { useRef } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator'
import HomeSVG from '../HomeSVG'
import useIndicator from '../../useIndicator'
import '../../../assets/styles/pages/HomePage.scss'
import ProfilePic from '../../../assets/static/ProfilePic.png'
import CibusPic from '../../../assets/static/CibusPic.png'
import { Link } from 'react-router-dom';
import ScrollIcon from '../../ScrollIcon';
import EmailIcon from '../../EmailIcon';
import PhoneIcon from '../../PhoneIcon';


const HomePage = () => {
    const refContainer = useRef(0);
    const scrollInfo = useIndicator(1);
    const email = "cristiansuarezg7@gmail.com";
    const number = "+34 645 40 31 64";

    return (
        <div className="page" onScroll={ scrollInfo.onScroll }>
            < Header index={ scrollInfo.value }/>
            < SocialMedia/>
            < Indicator index={ scrollInfo.value } previousIndex={ scrollInfo.previous }/>
            <div className="scroll">
                < ScrollIcon />
                <span>Scroll to<br/>Discover</span>
            </div>

            <section className="container">
                <div className="home-img">
                    < HomeSVG />
                    <img className="profile-pic" src={ProfilePic} alt="My profile pic :)"/>
                </div>
                <div className="info-container">
                    <div className="info">
                        <h2 className="hello">HELLO!</h2>
                        <h1 className="title">I'M CRISTIAN</h1>
                        <span>
                            UX/UI Designer &#38; Frontend Developer based in Seville who always wear a smile at work. 
                        </span><br/>
                        < Link to="/profile" className="info-btn profile-btn">Know me</Link>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="home-img">
                    <img className="projects-pic" src={CibusPic} alt="My profile pic :)"/>
                </div>
                <div className="info-container">
                    <div className="info">
                        <h1 className="title">CIBUS</h1>
                        <span>
                            The Point of Sale System that you don't have to learn.
                        </span><br/>
                        < Link to="/projects" className="info-btn project-btn">View case</Link>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="info-container">
                    <div className="info">
                        <h1 className="title">CIBUS</h1>
                        <div className="contact-container">
                            < EmailIcon />
                            <a className="contact" href={`mailto:${email}`} >{ email }</a><br/>
                        </div>
                        <div className="contact-container">
                            < PhoneIcon />
                            <a className="contact" href={`tel:${number}`} >{ number }</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default HomePage;