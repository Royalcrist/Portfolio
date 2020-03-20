import React from 'react';
import '../../assets/styles/HeaderSVG.scss'

const HeaderSVG = (props) => (
    <svg className="header-svg" viewBox="0 0 344.071 257.115">
        <defs>
            <linearGradient id="linear-gradient-1" x1="-0.134" y1="0.854" x2="1.131" y2="-0.245" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#0fc"/>
                <stop offset="1" stopColor="#1f73ff"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="0.071" y1="0.905" x2="0.742" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#ff9438"/>
                <stop offset="1" stopColor="#f40"/>
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="0.071" y1="0.905" x2="0.742" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#fb0"/>
                <stop offset="1" stopColor="#f80"/>
            </linearGradient>
        </defs>
        <path id="Intersection_1" className={`header-svg-${props.index}`} data-name="Intersection 1" d="M-11883.8,22685.732c-50.268-52.006-98.935-30.771-145.241-9.537-39.182,17.965-76.677,35.934-112.027,9.537-64.606-48.244,15.826-173.945,43.656-213.5h275.91v257.115C-11839.391,22724.559-11859.023,22711.361-11883.8,22685.732Z" transform="translate(12165.571 -22472.23)" fill={`url(#linear-gradient-${props.index})`}/>
    </svg>
)

export default HeaderSVG;