import React from 'react';
import '../../assets/styles/ProjectPreview.scss'

const ProjectPreview = (props) => {   
    return(
        <div className="preview">
            <div className="preview-img-container" style={{backgroundImage: `url(${props.source})`}}></div>

            <div className="preview-info">
                <h1>{ props.projectName }</h1>
                <span>{ props.projectRole }</span><br/>
                <span>{ props.projectDate }</span>
            </div>
            
        </div>
    );
}

export default ProjectPreview;