import React from 'react';
import '../../assets/styles/ProjectFeatures.scss'

const ProjectFeatures = (props) => {
    return (
        props.features.map( feature => (
            <div key={feature.id} className="project-features" style={(feature.isReverse) ? {gridColumn: "3 / 15"} : {} }>
                <div className="feature-container" style={(feature.isReverse) ? {gridColumn: "1"} : {} }>
                    <h1 className="feature-title"  style={(!feature.description) ? {marginBottom: '30%'} : {} }>{ feature.title }</h1><br/>
                    <span className="feature-description">
                        {feature.description}
                    </span>
                </div>
                <img className="feature-img" src={feature.img} alt={feature.alt} style={(feature.isReverse) ? {gridColumn: "2"} : {} }/>
            </div>)
        )
    );
};

export default ProjectFeatures;