import React, { useState, setEffect } from 'react';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Indicator from '../Indicator'


const HomePage = () => {
    const [ scrollInfo, setScrollInfo] = useState(1);

    return (
        <div className="container" onScroll={handleScroll}>
            < Header />
            < SocialMedia/>
            < Indicator index={ scrollInfo } />

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
    



    function handleScroll(e) {
        return setScrollInfo(useIndicator(Math.round((e.target.scrollTop / e.target.scrollHeight) * 100)));
    
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
}

export default HomePage;