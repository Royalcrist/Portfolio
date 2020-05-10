import React from 'react';

//Skills imports
import skillsFigma from "../../assets/static/skillsFigma.svg";
import skillsXd from "../../assets/static/skillsXd.svg";
import skillsPhotoshop from "../../assets/static/skillsPhotoshop.svg";
import skillsAi from "../../assets/static/skillsAi.svg";
import skillsHtml from "../../assets/static/skillsHtml.svg";
import skillsCss from "../../assets/static/skillsCss.svg";
import skillsJs from "../../assets/static/skillsJs.svg";
import skillsNode from "../../assets/static/skillsNode.svg";
import skillsReact from "../../assets/static/skillsReact.svg";
import skillsAngular from "../../assets/static/skillsAngular.svg";
import skillsExpress from "../../assets/static/skillsExpress.svg";
import skillsGit from "../../assets/static/skillsGit.svg";
import skillsGithub from "../../assets/static/skillsGithub.svg";
import skillsLinux from "../../assets/static/skillsLinux.svg";
import skillsJava from "../../assets/static/skillsJava.svg";
import skillsPython from "../../assets/static/skillsPython.svg";
import skillsCplus from "../../assets/static/skillsCplus.svg";
import skillsMongo from "../../assets/static/skillsMongo.svg";


export const Skills = () => {
    const skills = [ 
        { 
            id: 1,
            name: 'Figma', 
            file: skillsFigma 
        }, 
        {
            id: 2,
            name: 'Adobe XD', 
            file: skillsXd 
        },
        {
            id: 3,
            name: 'Adobe Photoshop', 
            file: skillsPhotoshop
        },
        {
            id: 4,
            name: 'Adobe Ilustrator', 
            file: skillsAi
        },        
        {
            id: 5,
            name: 'HTML', 
            file: skillsHtml 
        },        
        {
            id: 6,
            name: 'CSS', 
            file: skillsCss
        },
        {
            id: 7,
            name: 'Javascript', 
            file: skillsJs
        },
        {
            id: 8,
            name: 'NodeJS', 
            file: skillsNode
        },
        {
            id: 9,
            name: 'React', 
            file: skillsReact
        },
        {
            id: 10,
            name: 'Angular', 
            file: skillsAngular 
        },
        {
            id: 11,
            name: 'Express', 
            file: skillsExpress
        },
        {
            id: 12,
            name: 'MongoDB', 
            file: skillsMongo
        },
        {
            id: 13,
            name: 'Git', 
            file: skillsGit
        },
        {
            id: 14,
            name: 'GitHub', 
            file: skillsGithub 
        },
        {
            id: 15,
            name: 'Linux', 
            file: skillsLinux
        },
        {
            id: 16,
            name: 'Java', 
            file: skillsJava
        },
        {
            id: 17,
            name: 'Python', 
            file: skillsPython
        },
        {
            id: 18,
            name: 'C++', 
            file: skillsCplus
        },
    ];
    
    return (
        <div className="skills">
            {skills.map(
                skill => 
                    <div key={skill.id} className="skill-icon">
                        <img src={ skill.file } alt={ skill.name } style={ { width: '4.8em' } } /> 
                        <span>{ skill.name }</span>
                    </div> 
                )
            }
        </div>
    );
}