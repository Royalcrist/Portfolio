import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/Indicator.scss'
import scrollDirection from '../scrollDirection'


const Indicator = (props) => {
    return (
        <div className="indicator">
            <div className="i-container">
                <div className="i-unselected"></div>
                <div className="i-unselected"></div>
                <div className="i-unselected"></div>
                <div className={`i-selected scroll-${props.index}_${scrollDirection(props.index, props.previousIndex)}`}></div>
            </div>
            <span>Scroll for more</span>
        </div>
    );
}

export default Indicator;