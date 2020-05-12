import React, { useEffect, useState, useRef } from 'react';
import ProjectFeatures from '../ProjectFeatures';
import ProjectColors from '../ProjectColors';
import useScroll from '../../useScroll'
import Indicator from '../Indicator';
import FeaturedProjects from '../FeaturedProjects';
import BackBtn from '../BackBtn';


import '../../../assets/styles/pages/Cibus.scss';
import CibusPreview from '../../../assets/static/CibusPreview.jpg';
import UxProcess from '../../../assets/static/UxProcess.png';
import InfoArch from '../../../assets/static/InfoArchitecture.png';
import Proto from '../../../assets/static/CibusProto.png';
import AbTesting from '../../../assets/static/AbTesting.svg';
import CibusFonts from '../../../assets/static/CibusFonts.svg';
import CibusButtons from '../../../assets/static/CibusButtons.svg';
import CibusInputs from '../../../assets/static/CibusInputs.svg';
import CibusChecks from '../../../assets/static/CibusChecks.png';
import CibusOthers from '../../../assets/static/CibusOthers.png';
import CibusIcons from '../../../assets/static/CibusIcons.svg';
import Feature1 from '../../../assets/static/feature1.png';
import Feature2 from '../../../assets/static/feature2.png';
import Feature3 from '../../../assets/static/feature3.png';




const Cibus = () => {
    const cibusFeatures = [
        {
            "id": 1,
            "title": "Keep it all in the same page",
            "description": "All you need to run the business are in one page, making easier to find out every option.",
            "img": Feature1,
            "alt": "Menu feature image",
            "isReverse": false
        },
        {
            "id": 2,
            "title": "zero excuses to pay",
            "description": "An agile payment methods display that allow you to keep track all the transactions, add more methods and charging the customer every way they want.",
            "img": Feature2,
            "alt": "Payment feature",
            "isReverse": true
        },
        {
            "id": 3,
            "title": "And there is more...",
            "description": null,
            "img": Feature3,
            "alt": "More features image",
            "isReverse": false
        }
    ];
    const cibusColors = [
        {
            "id": 1,
            "color": "#B7815A",
            "colorTitle": "Primary"
        },
        {
            "id": 2,
            "color": "#C3A482",
            "colorTitle": "Primary Light"
        },
        {
            "id": 3,
            "color": "#FFFFFF",
            "colorTitle": "Background / Text"
        },
        {
            "id": 4,
            "color": "#36332F",
            "colorTitle": "Dark Background"
        },
        {
            "id": 5,
            "color": "#B7815A",
            "colorTitle": "Navbar / Options"
        },
        {
            "id": 6,
            "color": "#211F1D",
            "colorTitle": "Text bold / Focus"
        },
        {
            "id": 7,
            "color": "#E8E8E8",
            "colorTitle": "Gray Background"
        },
        {
            "id": 8,
            "color": "#969696",
            "colorTitle": "Paragraph / Disable items"
        },
        {
            "id": 9,
            "color": "#00C853",
            "colorTitle": "On press green button"
        },
        {
            "id": 10,
            "color": "#43A047",
            "colorTitle": "green button"
        },
        {
            "id": 11,
            "color": "#F44336",
            "colorTitle": "On press red button"
        },
        {
            "id": 12,
            "color": "#D50000",
            "colorTitle": "Red button"
        },
        {
            "id": 13,
            "color": "#E84545",
            "colorTitle": "Accent color 1"
        },
        {
            "id": 14,
            "color": "#903749",
            "colorTitle": "Accent color 2"
        },
        {
            "id": 15,
            "color": "#2980B9",
            "colorTitle": "Accent color 3"
        },
        {
            "id": 16,
            "color": "#76BFAC",
            "colorTitle": "Accent color 4"
        },
        {
            "id": 17,
            "color": "#F2BD14",
            "colorTitle": "Accent color 5"
        }
    ];
    const scrollInfo = useScroll(1);
    const [ isVisible, setIsVisible ] = useState(true);


    useEffect(() => {
        if (scrollInfo.value < 96){
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }, [scrollInfo.value]);

    console.log(isVisible)



    return (
        <>
        < Indicator modeTwo={ true } style={ !isVisible ? {display: 'none'} : {}}/>
        < BackBtn />
        <div className="project-page" onScroll={scrollInfo.onScroll}>
            <section className="preview grid-column">
                <div className="preview-img-container" style={{backgroundImage: `url(${CibusPreview})`}}></div>
                <div className="preview-info">
                    <h1>Cibus</h1>
                    <span>UX / UI Designer</span><br/>
                    <span>2018</span>
                </div>    
            </section>
            <section className="grid-column">
                <span className="project-description">
                Cibus is a Point of Sale System (POS) conceived to be secure, 
                modern and functional but at the same time easy to understand. 
                It's based on the previous POS System of the company, 
                keeping all the essential features that make it stand out. <br/><br/>

                It specializes on restaurants, the company main clients' sector, 
                improving usability and experience, reducing the cost of tech support 
                and make the process of using it faster. <br/><br/>

                It has a complete administrative space, where you can control things like the user's permissions, 
                inventory stocks, the recipes and much more. Also, The POS space is very straightforward, it has all 
                things to keep the business modern and rolling like order, delivery, charge, reports and support.
                </span>
                < ProjectFeatures features={ cibusFeatures } />
            </section>
            <section  className="grid-column project-problem" style={{backgroundImage: `url('../../../assets/static/ProblemTop.svg'), linear-gradient(#FF9438, #FF4400), url('../../../assets/static/ProblemBottom.svg')`}}>
                <h1 className="project-title">Background</h1>
                <span className="project-description">
                    Evolution POS is a Venezuela-Base software company that make tech solutions 
                    for restaurants and stores with +10 years established in the market and +300 clients. <br/><br/>

                    They have a multidisciplinar team that share the vision of changing the way that business works,
                     making all their process faster, effective and secure.<br/><br/>

                    I joined with them as the only one designer. I was responsible for develop the successor of their most popular
                     POS System for restaurants ePOS.<br/><br/>
                </span>

                <h2 className="project-title">The Problem</h2>
                <span className="project-description">
                    The users needed customer support once every 3 days or so because the process of perform
                     an action was cumbersome and therefore it was very susceptible to errors. <br/><br/>

                    The situation had to change as soon as posible, it was unstainable economically and it was
                     time consuming for both the company and its costumers. <br/><br/>

                    Also, the system hadn't receive any interface updates since it was developed nine years ago
                     at that time.<br/><br/> 
                </span>

                <h2 className="project-title">Main objective and requirements</h2>
                <span className="project-description">
                    We determined that our main goal was improving the usability to prevent bad experiences and 
                    avoid waiting by simplifying the user interfaces as well as improving attributes like wayfinding 
                    and findability. <br/><br/>

                    The requirements for the success of the project was:<br/><br/>

                    <ul className="project-description">
                        <li>Reduce the quantity of people who need technical support.</li>
                        <li>reduce the time to perform the most common tasks in the system.</li>
                        <li>Make the system very clear, natural and easy to navigate.</li>
                        <li>reduce the difficult of learning the system.</li>
                    </ul>
                </span>
            </section>
            <section className="grid-column">
                <h1 className="project-title">The process</h1>

                <h2 className="project-subtitle">UX process model</h2>
                <span className="project-description">
                    My UX process was base on the Double Diamond System of human centered 
                    design, adding the stages of implementation. <br/><br/>

                    This is an simplified representation of the process: 
                </span>
                <img className="project-img" style={{marginTop: "-50px"}} src={UxProcess} alt="UX Process"/>

                <h2 className="project-subtitle">Let's research</h2>
                <span className="project-description">
                    The first steep was understanding the problem, so I conducted interviews to 
                    discover how they feel using the previous system, therefore knowing what contents 
                    preserve, what we could do better and what features wasn't necessary in the restaurant 
                    sector. <br/><br/>

                    After I knew how is the experience using the previous system, I decided to run a tree 
                    testing or invert cardsort to see if the users could navigate easily and find certain 
                    locations to perform daily tasks, thus I could see the problems with the information 
                    architecture. <br/><br/>

                    The users had no problems locating the most essential task, but they had a hard time to 
                    find the complementary ones. For example, one of the task I gave to the users was "to 
                    locate where you could create an item of the inventory" which were able to complete easy, 
                    but when I gave them the next task of "locating where you could create a recipe with the 
                    inventory items" they just got lost. <br/><br/>

                    One of the reasons of such a raise of difficulty between task was the naming. Instead of 
                    using descriptive names easy to understand or standard words, the system has its own words 
                    and terminologies which only the company consider standard. <br/><br/>

                    The another factor that contributed to disorienting the users was the misplacement of some options, 
                    making them to find the solution in every group until reach the option they wanted it.
                </span>
            
                <h2 className="project-subtitle">information architecture</h2>
                <span className="project-description">
                    Based on the interviews, cardsorting and tree testing with the users and team members, 
                    I defined the final Cibus Information Map.
                </span>
                <img className="project-img" src={InfoArch} alt="Information Architecture"/>

                <h2 className="project-subtitle">Prototyping</h2>
                <span className="project-description">
                    Once knowing the information that Cibus was going to have, I began to make 
                    low fidelity prototypes section by section on one week sprints, creating small 
                    clickables wireflows and them run usability tests to them. 
                </span>
                <img className="project-img" style={{margin: "0 8.5% 120px", maxWidth: "83%"}} src={Proto} alt="Cibus Prototype"/>

                
                <h2 className="project-subtitle">A/B test, My savior</h2>
                <span className="project-description">
                    the usability test that suited the most was A/B testing, because I could prove two 
                    different versions of the wireflows for each display, one totally different from the 
                    old system with new forms of interaction and another with less changes, preserving 
                    the way they used to interact with some key functionalities. <br/><br/>

                    Thus, I could know whether the changes I made could affect in a positive or negative 
                    way to the user experience and performance.
                </span>
                <img className="project-img" style={{gridColumn: "1 / -1 "}} src={AbTesting} alt="A/B Testing"/>

                <h2 className="project-subtitle">UI time!</h2>
                <span className="project-description">
                    Finally after varios UX cycles, we got the definitive wireflow done and all the 
                    low fidelity prototypes designed and tested, so it was time to give a little of 
                    magic to Cibus. <br/><br/>

                    I wanted Cibus to be modern and elegant, but with some color and fun at the same 
                    time, so I decided to used an minimalistic a style like Material design 2 or crystal 
                    design with some modifications. <br/><br/>

                    The buttons, icons and menus had to be larger than a other touch systems to reduce 
                    errors due the small 10 inches screens which the customers use. <br/><br/>

                    I create the design inventory first, where I had all the guidelines of design, icons 
                    and components, to finally put the pieces together each display. 
                </span>
            </section>
            <section className="grid-column">
                <h1 className="project-title">Design Inventory</h1>

                <h2 className="project-subtitle">Colors Palete</h2>
                <span className="project-description">
                    Finally after varios UX cycles, we got the definitive wireflow done and all the 
                    low fidelity prototypes designed and tested, so it was time to give a little of 
                    magic to Cibus. <br/><br/>

                    I wanted Cibus to be modern and elegant, but with some color and fun at the same 
                    time, so I decided to used an minimalistic a style like Material design 2 or crystal 
                    design with some modifications. <br/><br/>

                    The buttons, icons and menus had to be larger than a other touch systems to reduce 
                    errors due the small 10 inches screens which the customers use. <br/><br/>

                    I create the design inventory first, where I had all the guidelines of design, icons 
                    and components, to finally put the pieces together each display. 
                </span>
                < ProjectColors colors={ cibusColors } />

                <h2 className="project-subtitle">Fonts</h2>
                <img className="project-img project-img-small" src={CibusFonts} alt="Cibus fonts"/>

                <h2 className="project-subtitle">Buttons</h2>
                <img className="project-img project-img-small" src={CibusButtons} alt="Cibus buttons"/>

                <h2 className="project-subtitle">Inputs</h2>
                <img className="project-img project-img-small" src={CibusInputs} alt="Cibus inputs"/>

                <h2 className="project-subtitle">Checkbox, radio and switch inputs</h2>
                <img className="project-img project-img-small" src={CibusChecks} alt="Cibus checkbox, radio and switch inputs"/>

                <h2 className="project-subtitle">Other inputs</h2>
                <img className="project-img project-img-small" src={CibusOthers} alt="Cibus Others"/>

                <h2 className="project-subtitle">Iconography set</h2>
                <img className="project-img project-img-small" src={CibusIcons} alt="Cibus Iconography"/>


                <h1 className="project-title">Conclusion</h1>
                <span className="project-description">
                    Cibus accomplished all the main goals that we established at the beginning of the 
                    project. The process is in average 100% faster than before, even at some task like 
                    the recipe part is 250% faster. It's easier to understand, making not only the 
                    process clearer, but encouraging the users to use or discover features that they or 
                    didn't use it or totally ignore due the frustration to try to understand them. <br/><br/>

                    Finally but not less important, we lowered the complexity of the system improving 
                    the learning curve and making it easier to understand, which it dropped the support 
                    calls to 400% less than before. <br/><br/>

                    Even though the complexity of create a new system was a tough challenge at first, 
                    All people from the customers to the group members of Evolution POS and me are all 
                    satisfied with the en result. It took us nine months to complete the project, 3 
                    months less than we planned it. <br/><br/>

                    It's a great change in the form we all work, but one which it will carry the company 
                    and its products to the next level.
                </span>
                < FeaturedProjects className="related-grid-projects" />
            </section>
        </div>
        </>
    )
}

export default Cibus;