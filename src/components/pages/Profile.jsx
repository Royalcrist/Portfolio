import React, { useEffect, useState } from 'react';
import Header from '../Header';
import ScrollIcon from '../../ScrollIcon';
import HomeImg from '../../HomeImg';
import GoBack from '../GoBack'
import '../../../assets/styles/pages/Profile.scss'
import Next from '../Next';
import useIndicator from '../../useIndicator'


const Profile = () => {
    const scrollInfo = useIndicator(1);
    const [ scrollIcon, setScrollIcon ] = useState(null)
    const [ isVisible, setIsVisible ] = useState(true)
    const skills = ['JavaScript', 'Adobe XD', 'HTML']
    
    const age = (bDay, bMonth, bYear) => {
        let year = new Date().getFullYear() - bYear;
        let month = new Date().getMonth() - bMonth;
        let day = new Date().getDate();

        return (month < 0 || bDay > day) ? year - 1 : year;
    }

    useEffect(() => {
        if(scrollInfo.value !== 3) {
            setScrollIcon(
                <div className="scroll-bg-container">
                    < ScrollIcon index={1} className="scroll-bg"/>
                </div>
            );
            setIsVisible(true);
        }
        else {
            setScrollIcon(null);
            setIsVisible(false);
        }
    }, [scrollInfo.value]);

    return (
        <React.Fragment>
            < Header index="1" hideNavigation={ true } showBack={ isVisible }/>
            { scrollIcon }
            <section className="grid container">
                < HomeImg />
                <div className="details" onScroll={scrollInfo.onScroll}>
                    <h1>CRISTIAN SUÁREZ</h1>
                    <span> { age(8, 9, 1999) } years old</span><br/>
                    <span>Base in seville</span><br/>
                    <span>Fluency in </span>
                    <h2>Skills</h2>
                    <u>
                        {skills.map(skill => <li>{ skill }</li> )}
                    </u>
                    <span>
                        Since I was a child I have been curious about the technological world and I've loved it from the first moment I discovered it. So when I was around 8 years old, I decided to start learning about computer science and design. Since then I haven't stopped learning.<br/>
                        <br/>
                        At 12 I started programming and at 14 I started designing, facts that have changed my life forever. Best of all, I love both worlds, because incurring both allows me to be in all stages of the product; from birth to deployment.<br/>
                        <br/>
                        As I always liked to create things that solve problems in my day to day, when I learned to develop software it was like magic, suddenly all those creations that I had in my mind could make them come alive.<br/>
                        <br/>
                        "the most complex problems has the most simple solutions"<br/>
                        <br/>
                        In addition, the fact that someone has positively influenced one of the solutions I created motivates me to continue giving my best and never stop innovating.<br/>
                    </span>
                    <div  className="nav-btn">
                        < GoBack />
                        < Next />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Profile;