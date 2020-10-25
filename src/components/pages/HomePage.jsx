import React, { useState, useContext, useEffect } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator';
import useIndicator from '../../useIndicator';
import useScroll from '../../useScroll';
import Button from '../Button';
import { ProjectsContext } from '../contexts/ProjectsProvider';
import '../../../assets/styles/pages/HomePage.scss';
import EmailIcon from '../../EmailIcon';
import PhoneIcon from '../../PhoneIcon';
import ProfilePic from '../../../assets/static/ProfilePic.png';
import ContactPic from '../../../assets/static/ContactPic.png';
import ContactPicLq from '../../../assets/static/ContactPicLq.png';
import LinkedInSVG from '../../../assets/static/linkedin.svg';
import GithubSVG from '../../../assets/static/github.svg';
import HomeProjects from '../HomeProjects';

const HomePage = () => {
  const scroll = useScroll(0);
  const scrollInfo = useIndicator(scroll.value);
  const email = 'cristiansuarezg7@gmail.com';
  const number = '+34 645 40 31 64';
  const linkedin = {
    id: 1,
    description: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hicrist/',
    logo: LinkedInSVG,
  };
  const github = {
    id: 2,
    description: 'Github',
    url: 'https://github.com/Royalcrist',
    logo: GithubSVG,
  };
  const { index: projectIndex, projects } = useContext(ProjectsContext);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    if (scrollInfo.value === 2) setColor(projects[projectIndex].color);
    else if (scrollInfo.value === 3) setColor('yellow');
    else setColor('blue');
  }, [scrollInfo.value, projectIndex]);

  return (
    <>
      <Header
        index={scrollInfo.value}
        showLogo={true}
        showNav={true}
        color={color}
        socialMedia={{ github, linkedin }}
      />

      <div className="media-container">
        <SocialMedia media={linkedin} />
        <SocialMedia media={github} />
      </div>

      <Indicator index={scrollInfo.value} previousIndex={scrollInfo.prev} />

      <div className="page" onScroll={scroll.onScroll}>
        <section id="me" className="grid-column container">
          <div className="img-container">
            <img
              className="home-pic"
              src={ProfilePic}
              alt="My profile pic :)"
            />
          </div>
          <div className="info-container">
            <div className="info">
              <h2 className="hello">HELLO!</h2>
              <h1 className="title">I'M CRISTIAN</h1>
              <span>
                UX/UI Designer &#38; Frontend Developer based in Seville who
                always wear a smile at work.
              </span>
              <br />
              <Button url={'/profile'}>Know me</Button>
            </div>
          </div>
        </section>

        <HomeProjects />

        <section id="contact" className="grid-column container">
          <div className="img-container">
            <img
              className="home-pic hq contact"
              src={ContactPic}
              alt="Contact me :)"
            />
            <img
              className="home-pic lq contact"
              src={ContactPicLq}
              alt="Contact me :)"
            />
          </div>
          <div className="info-container">
            <div className="info contact-info">
              <h1 className="title">GET IN TOUCH</h1>
              <div className="contact-container">
                <EmailIcon />
                <a className="contact" href={`mailto:${email}`}>
                  {email}
                </a>
                <br />
              </div>
              <div className="contact-container">
                <PhoneIcon />
                <a className="contact" href={`tel:${number}`}>
                  {number}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
