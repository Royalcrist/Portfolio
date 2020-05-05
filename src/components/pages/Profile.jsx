import React, { useEffect, useState } from 'react';
import '../../../assets/styles/pages/Profile.scss'
import Next from '../Next';
import useScroll from '../../useScroll'
import ageCalculator from '../../ageCalculator';
import SpanishIcon from '../../SpanishIcon'
import EnglishIcon from '../../EnglishIcon'
import ProfilePic from '../../../assets/static/ProfilePic.png'
import LinkedInSVG from '../../../assets/static/linkedin.svg';
import GithubSVG from "../../../assets/static/github.svg";
import Indicator from '../Indicator'

//Skills imports
import skillsFigma from "../../../assets/static/skillsFigma.svg";
import skillsXd from "../../../assets/static/skillsXd.svg";
import skillsPhotoshop from "../../../assets/static/skillsPhotoshop.svg";
import skillsAi from "../../../assets/static/skillsAi.svg";
import skillsHtml from "../../../assets/static/skillsHtml.svg";
import skillsCss from "../../../assets/static/skillsCss.svg";
import skillsJs from "../../../assets/static/skillsJs.svg";
import skillsNode from "../../../assets/static/skillsNode.svg";
import skillsReact from "../../../assets/static/skillsReact.svg";
import skillsAngular from "../../../assets/static/skillsAngular.svg";
import skillsExpress from "../../../assets/static/skillsExpress.svg";
import skillsGit from "../../../assets/static/skillsGit.svg";
import skillsGithub from "../../../assets/static/skillsGithub.svg";
import skillsLinux from "../../../assets/static/skillsLinux.svg";
import skillsJava from "../../../assets/static/skillsJava.svg";
import skillsPython from "../../../assets/static/skillsPython.svg";
import skillsCplus from "../../../assets/static/skillsCplus.svg";
import skillsMongo from "../../../assets/static/skillsMongo.svg";
import BackBtn from '../BackBtn';



const Profile = ( props ) => {
    const scrollInfo = useScroll(1);
    const [ isVisible, setIsVisible ] = useState(true);
    const skills = [ 
        { 
            id: 1,
            name: 'Figma', 
            file: skillsFigma 
        }, 
        {
            id: 2,
            name: 'Adobe XD', 
            file: skillsXd 
        },
        {
            id: 4,
            name: 'Adobe Photoshop', 
            file: skillsPhotoshop
        },
        {
            id: 4,
            name: 'Adobe Ilustrator', 
            file: skillsAi
        },        
        {
            id: 5,
            name: 'HTML', 
            file: skillsHtml 
        },        
        {
            id: 6,
            name: 'CSS', 
            file: skillsCss
        },
        {
            id: 7,
            name: 'Javascript', 
            file: skillsJs
        },
        {
            id: 8,
            name: 'NodeJS', 
            file: skillsNode
        },
        {
            id: 9,
            name: 'React', 
            file: skillsReact
        },
        {
            id: 10,
            name: 'Angular', 
            file: skillsAngular 
        },
        {
            id: 11,
            name: 'Express', 
            file: skillsExpress
        },
        {
            id: 12,
            name: 'MongoDB', 
            file: skillsMongo
        },
        {
            id: 13,
            name: 'Git', 
            file: skillsGit
        },
        {
            id: 14,
            name: 'GitHub', 
            file: skillsGithub 
        },
        {
            id: 15,
            name: 'Linux', 
            file: skillsLinux
        },
        {
            id: 16,
            name: 'Java', 
            file: skillsJava
        },
        {
            id: 17,
            name: 'Python', 
            file: skillsPython
        },
        {
            id: 18,
            name: 'C++', 
            file: skillsCplus
        },
    ];
    const age = ageCalculator(8, 9, 1999);
    const staticAssets = '../../../assets/static/';
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


    useEffect(() => {
        if (scrollInfo.value < 70){
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }, [scrollInfo.value]);

    return (
        <React.Fragment>
            < BackBtn hideBg={ true } />
            <section className="grid-column container">

                <div className="img-container">
                    <img className="home-pic" src={ProfilePic} alt="My profile pic :)"/>
                </div>

                <div className="details" onScroll={scrollInfo.onScroll}>
                    <h1>CRISTIAN SUÁREZ</h1>
                    <div className="personal-details">
                        <span> { age } years old</span><br/>
                        <span>Base in seville</span><br/>
                        <span>Fluency in  < SpanishIcon />  &#38;  < EnglishIcon /></span>
                    </div>
                    <h2>Skills</h2>
                    <div className="skills">
                        {skills.map(
                            skill => 
                                <div key={skill.id} className="skill-icon">
                                    <img src={ skill.file } alt={ skill.name } style={ { width: '4.8em' } } /> 
                                    <span>{ skill.name }</span>
                                </div> 
                            )
                        }
                    </div>
                    <h2>Background</h2>
                    <span>
                        Since I was a child I have been curious about the technological world 
                        and I've loved it from the first moment I discovered it. So when I was 
                        around 8 years old, I decided to start learning about computer science 
                        and design. Since then I haven't stopped learning.<br/><br/>

                        At 12 I started programming and at 14 I started designing, facts that have 
                        changed my life forever. Best of all, I love both worlds, because incurring 
                        both allows me to be in all stages of the product; from birth to deployment.<br/><br/>

                        As I always liked to create things that solve problems in my day to day, when 
                        I learned to develop software it was like magic, suddenly all those creations 
                        that I had in my mind could make them come alive.<br/><br/>

                        "the most complex problems has the most simple solutions"<br/><br/>

                        In addition, the fact that someone has positively influenced one of the 
                        solutions I created motivates me to continue giving my best and never stop 
                        innovating.                    
                    </span>
                    <div  className="nav-btn">
                        < Next url="/cibus" />
                    </div>
                </div>
            </section>
            {/* < Indicator /> */}
        </React.Fragment>
    )
}

export default Profile;