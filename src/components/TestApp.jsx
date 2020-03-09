import React, { useState, useEffect } from 'react';
import Indicator from '../components/Indicator'
import useIndicator from '../useIndicator'
import '../../assets/styles/TestApp.scss'

const TestApp = (props) => {
    const scrollInfo = useIndicator;
    console.log(scrollInfo)



    return (
        <div className="container" onScroll={useIndicator}>
            < Indicator index={ scrollInfo } />
            <section className="child green">
                <h3>Hello</h3>
            </section>
            <section className="child blue">
                <h3>I'm working</h3>
            </section>
            <section className="child red">
                <h3>Thankfuly</h3>
            </section>
        </div>
    )
}

export default TestApp;