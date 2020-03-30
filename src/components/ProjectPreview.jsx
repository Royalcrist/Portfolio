import React from 'react';
import '../../assets/styles/ProjectPreview.scss'

const ProjectPreview = (props) => (
    <div className="preview">

        <div className="preview-container-top">
            <svg className="preview-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 411">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Rectangle_574" data-name="Rectangle 574" width="1920" height="411" transform="translate(0 -173)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                    </clipPath>
                    <filter id="Path_554" x="-94" y="-12" width="2094" height="416" filterUnits="userSpaceOnUse">
                    <feOffset dy="12" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="8" result="blur"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="Mask_Group_5" data-name="Mask Group 5" transform="translate(0 173)" clipPath="url(#clip-path)">
                    <g transform="matrix(1, 0, 0, 1, 0, -173)" filter="url(#Path_554)">
                    <path id="Path_554-2" data-name="Path 554" d="M0,0H2046V368s-496.5-78.783-1008-78.783S0,368,0,368Z" transform="translate(-70)" fill="#fff"/>
                    </g>
                </g>
            </svg>
        </div>

  
        <div className="preview-img-container" style={{backgroundImage: `url(${props.source})`}}></div>

        <div className="preview-container-bottom">
            <svg className="preview-bottom" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 525">
                <defs>
                    <clipPath id="clip-path60">
                    <rect id="Rectangle_575" data-name="Rectangle 575" width="100%" height="526" transform="translate(0 553)" fill="#fff" stroke="#707070" strokeWidth="0"/>
                    </clipPath>
                    <filter id="Path_552" x="-341.162" y="38.473" width="2537.79" height="787.639" filterUnits="userSpaceOnUse">
                    <feOffset dy="-20" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="14.5" result="blur"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g id="Mask_Group_6" data-name="Mask Group 6" transform="translate(0 -553)" clipPath="url(#clip-path60)">
                    <g transform="matrix(1, 0, 0, 1, 0, 553)" filter="url(#Path_552)">
                    <path id="Path_552-2" data-name="Path 552" d="M-5193.731-22831.436s355.191-78.066,708.731-27.625,565.268,259.781,783.105,290.135,534.772-56.227,648.155-290.135-132.585,661.672-132.585,661.672H-5474.662l69.4-666.889Z" transform="translate(5177 23000)" fill="#fff"/>
                    </g>
                </g>
            </svg>
            <div style={{backgroundColor: "white", height: "100vh", width: "110%", zIndex: "0", margin: "-20px"}}></div>
        </div>

        <div className="preview-info">
            <h1>{ props.projectName }</h1>
            <span>{ props.projectRole }</span><br/>
            <span>{ props.projectDate }</span>
        </div>
        
    </div>
);

export default ProjectPreview;