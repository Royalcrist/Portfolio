import React, { createContext } from 'react';

//Data
import LinkedInSVG from '../../../assets/static/linkedin.svg';
import GithubSVG from "../../../assets/static/github.svg";


export const SocialMediaContext = createContext();

export const SocialMediaProvider = props => {
    const socialMedia = [
        {
            "id": 1,
            "description": "LinkedIn",
            "url": "https://www.linkedin.com/in/hicrist/",
            "logo": LinkedInSVG
        },
        {
            "id": 2,
            "description": "Github",
            "url": "https://github.com/Royalcrist",
            "logo": GithubSVG
        }
    ];

    return (
        < SocialMediaContext.Provider value={ socialMedia }>
            {props.children}
        </SocialMediaContext.Provider>
    );
}