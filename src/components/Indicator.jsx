import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/Indicator.scss'
import scrollDirection from '../scrollDirection'


const Indicator = props => {
    return (
        <div className={`indicator-container ${props.modeTwo ? 'indicator-bg' : ''}`} style={props.style}>
            <div className={`indicator ${props.modeTwo ? 'indicator-two' : ''} ${ props.notCenter ? 'not-center' : '' }`}>
                <div className="i-container" style={ props.modeTwo ? {display: 'none'} : {}}>
                    <div className="i-unselected"></div>
                    <div className="i-unselected"></div>
                    <div className="i-unselected"></div>
                    <div className={`i-selected scroll-${props.index}_${scrollDirection(props.index, props.previousIndex)}`}></div>
                </div>
                <span>Scroll for more</span>
            </div>
        </div>
    );
}

export default Indicator;