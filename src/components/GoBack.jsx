import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import '../../assets/styles/GoBack.scss';

const GoBack = () => {
    return (
        <Link to="/" className="go-back">
            <svg xmlns="http://www.w3.org/2000/svg" className="go-back-icon" viewBox="0 0 44.921 63.356">
                <g id="Group_294" data-name="Group 294" transform="translate(-135.073 -45.972)">
                    <path id="Path_93" data-name="Path 93" d="M9320.783-4932.816,9285-4904.784l35.783,26.911" transform="translate(-9145 4983)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="6"/>
                </g>
            </svg>
            <span>Go<br/>Back</span>
        </Link>
    );
};

export default GoBack;