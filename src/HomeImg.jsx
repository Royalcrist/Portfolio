import React from 'react';
import HomeSVG from './components/HomeSVG'
import ProfilePic from '../assets/static/ProfilePic.png'
import '../assets/styles/HomeImg.scss'

const HomeImg = (props) => (
    <div style={props.style} className="home-img">
        < HomeSVG />
        <img className="profile-pic" src={ProfilePic} alt="My profile pic :)"/>
    </div>
);

export default HomeImg;