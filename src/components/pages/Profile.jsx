import React, { useEffect, useState, useRef } from "react";
import "../../../assets/styles/pages/Profile.scss";
import BackBtn from "../BackBtn";
import useScroll from "../../useScroll";
import ageCalculator from "../../ageCalculator";
import SpanishIcon from "../../SpanishIcon";
import EnglishIcon from "../../EnglishIcon";
import ProfilePic from "../../../assets/static/ProfilePic.png";
import Indicator from "../Indicator";
import { Skills } from "../Skills";
import FeaturedProjects from "../FeaturedProjects";
import usePrev from "../../usePrev";

const Profile = (props) => {
    const scrollInfo = useScroll(0);
    const prev = usePrev(scrollInfo.value);
    const [isVisible, setIsVisible] = useState(true);
    const age = ageCalculator(8, 9, 1999);

    useEffect(() => {
        if (scrollInfo.value < prev) {
            setIsVisible(true);
        } else if (scrollInfo.value > prev) {
            setIsVisible(false);
        }
    });

    return (
        <React.Fragment>
            <BackBtn url="/" />
            <section
                className="grid-column profile-page"
                onScroll={scrollInfo.onScroll}
            >
                <div className="profile-container">
                    <img
                        className="profile-pic"
                        src={ProfilePic}
                        alt="My profile pic :)"
                    />
                </div>

                <div className="details">
                    <h1>CRISTIAN SUÁREZ</h1>
                    <div className="personal-details">
                        <span> {age} years old</span>
                        <br />
                        <span>Base in seville</span>
                        <br />
                        <span>
                            Fluency in <SpanishIcon /> &#38; <EnglishIcon />
                        </span>
                    </div>
                    <h2>Skills</h2>
                    <Skills />
                    <h2>Background</h2>
                    <span>
                        Since I was a child I have been curious about the
                        technological world and I've loved it from the first
                        moment I discovered it. So when I was around 8 years
                        old, I decided to start learning about computer science
                        and design. Since then I haven't stopped learning.
                        <br />
                        <br />
                        At 12 I started programming and at 14 I started
                        designing, facts that have changed my life forever. Best
                        of all, I love both worlds, because incurring both
                        allows me to be in all stages of the product; from birth
                        to deployment.
                        <br />
                        <br />
                        As I always liked to create things that solve problems
                        in my day to day, when I learned to develop software it
                        was like magic, suddenly all those creations that I had
                        in my mind could make them come alive.
                        <br />
                        <br />
                        Besides, the fact that someone has positively influenced
                        one of the solutions I created motivates me to continue
                        giving my best and never stop innovating.
                    </span>
                    <FeaturedProjects className="related-grid" />
                </div>
            </section>
            <Indicator
                modeTwo={true}
                notCenter={true}
                style={!isVisible ? { bottom: "-7em" } : {}}
            />
        </React.Fragment>
    );
};

export default Profile;
