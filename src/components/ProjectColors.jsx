import React from 'react';
import '../../assets/styles/ProjectColors.scss'

const ProjectColors = (props) => {
    return (
        <section className="colors">
            {
                props.colors.map( color => (
                    <div key={color.id} className="color-container">
                        <div className="color-preview" style={{backgroundColor: color.color}} ></div>
                        <div className="color-text">
                            <h3 className="color-title">{ color.colorTitle }</h3>
                            <span className="color-description">{ color.color }</span>
                        </div>
                    </div>
                    )
                )
            }
        </section>
    );
};

export default ProjectColors;