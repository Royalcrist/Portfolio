import React, { useContext, useState } from 'react';
import '../../assets/styles/HomeProjects.scss';
import Button from './Button';
import { ProjectsContext } from './contexts/ProjectsProvider';

import Navigation from '../../assets/static/Navigation.svg';

const HomeProjects = props => {
    const { projects, index, setIndex } = useContext(ProjectsContext);
    const { name, description, img, imgLq, url, color, isDisable } = projects[ index ];

    return (
        <section id="projects" className="grid-column container">
            <div className="img-container project">
                <img className="home-pic hq project" src={ img } alt="My profile pic :)"/>
                <img className="home-pic lq project" src={ imgLq } alt="My profile pic :)"/>
            </div>


            {
                index !== 0 &&
                <div className="prev-container">
                    <button className="nav-prev" onClick={() => { setIndex( index >= 1 ? index - 1 : index ) }}>
                        <img src={ Navigation } alt="Previous"/>
                    </button>
                </div>
            }

            {
                index !== projects.length -1 &&
                <div className="next-container">       
                    <button className="nav-next" onClick={() => { setIndex( index < projects.length -1 ? index + 1 : index ) }}>
                        <img src={ Navigation } alt="Next"/>
                    </button>
                </div>
            }

            <div className="info-container project-container">
                <div className="info project-info">
                    <h1 className="title">{ name }</h1>
                    <span>{ description }</span><br/>
                    < Button url={ url } color={ color } isDisable={ isDisable }>
                        { isDisable ? 'Soon!' : 'View case' }
                    </ Button>
                    <div className="project-indicator">
                        <span className="project-indicator-current" style={{color: 'var(--text-primary)'}}>{ `${index + 1 < 10 ? '0' : ''}${index + 1}`}</span>
                        /
                        <span className="project-indicator-total">{`${projects.length < 10 ? '0' : ''}${projects.length}`}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;