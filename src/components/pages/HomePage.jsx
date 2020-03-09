import React, { useState, setEffect } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator'
import useIndicator from '../../useIndicator'


const HomePage = () => {

    const scrollInfo = useIndicator(1);

    return (
        <div className="container" onScroll={scrollInfo.onScroll}>
            < Header />
            < SocialMedia/>
            < Indicator index={ scrollInfo.value } />
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