import React, { useState, useEffect } from 'react';
import '../../assets/styles/Indicator.scss'


const Indicator = (props) => {

    return (
        <div className="indicator">
            <div className="i-unselected"></div>
            <div className="i-unselected"></div>
            <div className="i-unselected"></div>
            <div className="i-selected">{ props.index }</div>
        </div>
    );
}

export default Indicator;