import React, { useState, useEffect } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator'
import useIndicator from '../../useIndicator'
import '../../../assets/styles/pages/HomePage.scss'
import { Link } from 'react-router-dom';
import EmailIcon from '../../EmailIcon';
import PhoneIcon from '../../PhoneIcon';
import ProfilePic from '../../../assets/static/ProfilePic.png';
import CibusPic from '../../../assets/static/CibusPic.png';
import CibusPicLq from '../../../assets/static/CibusPicLq.png';
import ContactPic from '../../../assets/static/ContactPic.png';
import ContactPicLq from '../../../assets/static/ContactPicLq.png';
import LinkedInSVG from '../../../assets/static/linkedin.svg';
import GithubSVG from "../../../assets/static/github.svg";



const HomePage = () => {
    const scrollInfo = useIndicator(1);
    const email = "cristiansuarezg7@gmail.com";
    const number = "+34 645 40 31 64";
    const linkedin = {
        "id": 1,
        "description": "LinkedIn",
        "url": "https://www.linkedin.com/in/hicrist/",
        "logo": LinkedInSVG
    };
    const github = {
        "id": 2,
        "description": "Github",
        "url": "https://github.com/Royalcrist",
        "logo": GithubSVG
    };

    const color = value => {
        if (value === 1) return 'blue';
        else if (value === 2) return 'orange';
        else return 'yellow';
    }

    return (
        <>
            < Header index={ scrollInfo.value } showLogo={ true } showNav={ true } color={color(scrollInfo.value)} socialMedia={[ github, linkedin ]}/>

            <div className="media-container">
                < SocialMedia media={ linkedin }/>
                < SocialMedia media={ github }/>
            </div>

            < Indicator index={ scrollInfo.value } previousIndex={ scrollInfo.previous }/>

            <div className="page" onScroll={ scrollInfo.onScroll }>
                <section id="me" className="grid-column container">
                    <div className="img-container">
                        <img className="home-pic" src={ProfilePic} alt="My profile pic :)"/>
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

                <section id="projects" className="grid-column container">
                    <div className="img-container project">
                        <img className="home-pic hq project" src={CibusPic} alt="My profile pic :)"/>
                        <img className="home-pic lq project" src={CibusPicLq} alt="My profile pic :)"/>
                    </div>
                    <div className="info-container">
                        <div className="info">
                            <h1 className="title">CIBUS</h1>
                            <span>
                                The Point of Sale System that you don't have to learn.
                            </span><br/>
                            < Link to="/cibus" className="info-btn project-btn">View case</Link>
                        </div>
                    </div>
                </section>

                <section id="contact" className="grid-column container">
                    <div className="img-container">
                        <img className="home-pic hq" src={ ContactPic } alt="Contact me :)"/>
                        <img className="home-pic lq" src={ ContactPicLq } alt="Contact me :)"/>
                    </div>
                    <div className="info-container">
                        <div className="info contact-info">
                            <h1 className="title">GET IN TOUCH</h1>
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
        </>
    );

}

export default HomePage;