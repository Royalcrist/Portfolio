import React, { createContext } from 'react';

//Data
import CibusPic from '../../../assets/static/CibusPic.png';
import CibusPicLq from '../../../assets/static/CibusPicLq.png';

export const ProjectsContext = createContext();

export const ProjectsProvider = props => {
    const projects = [
        {
            id: 1,
            name: "Cibus",
            description: "The Point of Sale System that you don't have to learn.",
            img: CibusPic,
            imgLq: CibusPicLq,
            url: "/cibus",
            color: "orange"
        },
    ];

    return (
        < ProjectsContext.Provider value={ projects }>
            {props.children}
        </ProjectsContext.Provider>
    );
}
