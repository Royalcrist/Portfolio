import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/Indicator.scss'


const Indicator = (props) => {
    function scrollDirection (current, previous) {
        let direction;

        (current > previous)  ? direction = 'DOWN' : direction = 'UP';

        return direction;
    }

    

    return (
        <div className="indicator">
            <div className="i-container">
                <div className="i-unselected"></div>
                <div className="i-unselected"></div>
                <div className="i-unselected"></div>
                <div className={`i-selected scroll-${props.index}_${scrollDirection(props.index, props.previousIndex)}`}>{ props.index }</div>
            </div>
        </div>
    );
}

export default Indicator;