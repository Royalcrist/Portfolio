import React from 'react';

const ProjectDescription = props => {
    return (
        <span className="project-description">
            {props.text.split('\n').map( ( item, key ) => {return <React.Fragment key={key}>{item}<br/><br/></React.Fragment>} )}
        </span>
    );
};

export default ProjectDescription;