import React, { createContext } from 'react';

//Data
import CibusPic from '../../../assets/static/CibusPic.png';
import CibusPicLq from '../../../assets/static/CibusPicLq.png';
import GobasketPic from '../../../assets/static/GobasketPic.png';

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
        {
            id: 2,
            name: "GoBasket",
            description: "More than a shop-list app. Organize all your groceries on one tap.",
            img: GobasketPic,
            imgLq: GobasketPic,
            url: "/gobasket",
            color: "red",
            isDisable: true
        },
    ];

    return (
        < ProjectsContext.Provider value={ projects }>
            {props.children}
        </ProjectsContext.Provider>
    );
}
