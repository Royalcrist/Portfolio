import React from 'react';
import '../assets/styles/ScrollIcon.scss'

const ScrollIcon = (props) => (
    <div className={`scroll ${ props.index === 3 ? 'scroll-hide' : '' } ${props.className}`}>
        <svg className="scroll-icon" viewBox="0 0 52 82.269">
            <g id="Scroll_Icon" data-name="Scroll Icon" transform="translate(-926.5 -924)">
                <g id="Rectangle_161" data-name="Rectangle 161" transform="translate(926.5 924)" fill="none" stroke="#000" strokeWidth="4">
                    <rect width="52" height="82.269" rx="26" stroke="none"/>
                    <rect x="2" y="2" width="48" height="78.269" rx="24" fill="none"/>
                </g>
                <rect id="Rectangle_162" data-name="Rectangle 162" width="4" height="17" rx="2" transform="translate(950.5 935.746)"/>
                <path id="Path_82" data-name="Path 82" d="M2952.68,919.92l6.32,7.36,6.32-7.36" transform="translate(-2006.5 43.134)" fill="none" stroke="#000" strokeLinejoin="round" strokeWidth="4"/>
            </g>
        </svg>
        <span>Scroll to<br/>Discover</span>
    </div>

)


export default ScrollIcon;