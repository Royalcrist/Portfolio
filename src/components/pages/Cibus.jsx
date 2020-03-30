import React from 'react';
import ScrollIcon from '../../ScrollIcon'
import Header from '../Header'
import ProjectPreview from '../ProjectPreview'
import '../../../assets/styles/pages/Cibus.scss'

const Cibus = () => {
    return (
        <div className="projet-page">
            < Header index="4" hideNavigation={ true } showBack={ true } customColor={'orange'}/>
            < ScrollIcon />
            < ProjectPreview projectName="Cibus" projectRole="UX/UI Designer" projectDate="2018" source="../../../assets/static/CibusPreview.jpg" alt="Cibus Preview"/>
            <section className="grid">
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
            </section>
            <section>
                <h1>Background</h1>
                <span>
                    Evolution POS is a Venezuela-Base software company that make tech solutions 
                    for restaurants and stores with +10 years established in the market and +300 clients. <br/><br/>

                    They have a multidisciplinar team that share the vision of changing the way that business works,
                     making all their process faster, effective and secure.<br/><br/>

                    I joined with them as the only one designer. I was responsible for develop the successor of their most popular
                     POS System for restaurants ePOS.<br/><br/>
                </span>

                <h1>The Problem</h1>
                <span>
                    The users needed customer support once every 3 days or so because the process of perform
                     an action was cumbersome and therefore it was very susceptible to errors. <br/><br/>

                    The situation had to change as soon as posible, it was unstainable economically and it was
                     time consuming for both the company and its costumers. <br/><br/>

                    Also, the system hadn't receive any interface updates since it was developed nine years ago
                     at that time.<br/><br/> 
                </span>

                <h1>Main objective and requirements</h1>
                <span>
                    We determined that our main goal was improving the usability to prevent bad experiences and 
                    avoid waiting by simplifying the user interfaces as well as improving attributes like wayfinding 
                    and findability. <br/><br/>

                    The requirements for the success of the project was:<br/><br/>

                    <ul>
                        <li>Reduce the quantity of people who need technical support.</li>
                        <li>reduce the time to perform the most common tasks in the system.</li>
                        <li>Make the system very clear, natural and easy to navigate.</li>
                        <li>reduce the difficult of learning the system.</li>
                    </ul>
                </span>
            </section>
        </div>
    )
}

export default Cibus;