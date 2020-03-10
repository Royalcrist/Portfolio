import React, { useRef } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator'
import useIndicator from '../../useIndicator'
import '../../../assets/styles/pages/HomePage.scss'


const HomePage = () => {
    const refContainer = useRef(0);

    const scrollInfo = useIndicator(1);

    return (
        <div className="container" onScroll={ scrollInfo.onScroll }>
            < Header />
            < SocialMedia/>
            < Indicator index={ scrollInfo.value } previousIndex={ scrollInfo.previous }/>
            <section className="child green">
                <h3>Hello</h3>
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