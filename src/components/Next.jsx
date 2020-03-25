import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import '../../assets/styles/Next.scss';

const Next = () => {
    return (
        <Link to="/" className="next">
            <span>Discover<br/>My Proyects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="next-icon" viewBox="0 0 93.623 132.515">
                <path id="Path_093" data-name="Path 093" d="M9285-4932.816l75.346,59.026L9285-4817.127" transform="translate(-9276.576 4941.24)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="12"/>
            </svg>
        </Link>
    );
};

export default Next;