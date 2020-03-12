import React, { useRef } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator'
import HomeSVG from '../HomeSVG'
import useIndicator from '../../useIndicator'
import '../../../assets/styles/pages/HomePage.scss'
import ProfilePic from '../../../assets/static/ProfilePic.png'
import { Link } from 'react-router-dom';


const HomePage = () => {
    const refContainer = useRef(0);

    const scrollInfo = useIndicator(1);

    return (
        <div className="container" onScroll={ scrollInfo.onScroll }>
            < Header />
            < SocialMedia/>
            < Indicator index={ scrollInfo.value } previousIndex={ scrollInfo.previous }/>

            <section className="child green">
                <div className="home-img">
                    < HomeSVG />
                    <img className="profile-pic" src={ProfilePic} alt="My profile pic :)"/>
                </div>
                <div className="info">
                    <h2>HELLO!</h2>
                    <h1>I'M CRISTIAN</h1>
                    < Link to="/profile" className="profile-btn">Know me</Link>
                </div>
            </section>

            <section className="child blue">
                <h3>Hello</h3>
            </section>

            <section className="child red">
                <h3>Hello</h3>
            </section>
        </div>
    );

}

export default HomePage;