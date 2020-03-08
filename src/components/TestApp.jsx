import React, { useState, useEffect } from 'react';
import Indicator from '../components/Indicator'
import '../../assets/styles/TestApp.scss'

const TestApp = (props) => {
    const [ scrollInfo, setScrollInfo ] = useState(0);

    function handleScroll(e) {
        let counter = setScrollInfo(useIndicator(Math.round((e.target.scrollTop / e.target.scrollHeight) * 100)));

        function useIndicator(scrollValue) {
            let value = 1;
    
            if (scrollValue === 0) {
                value = 1;
            }
            else if (scrollValue >= 33 && scrollValue < 66) {
                value = 2;
            }
            else if (scrollValue >= 66) {
                value = 3;
            }
    
            return value;
        }
    }

    console.log(scrollInfo)



    return (
        <div className="container" onScroll={handleScroll}>
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