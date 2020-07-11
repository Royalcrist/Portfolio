import React from "react";
import "../../assets/styles/ProjectFeatures.scss";

const ProjectFeatures = (props) => {
    return props.features.map((feature) => (
        <div
            key={feature.id}
            className={`project-features ${
                feature.isReverse ? "project-features-reverse" : ""
            }`}
        >
            <div
                className={`feature-container ${
                    feature.isReverse ? "feature-container-reverse" : ""
                }`}
            >
                <h2
                    className="feature-title"
                    style={!feature.description ? { marginBottom: "30%" } : {}}
                >
                    {feature.title}
                </h2>
                <br />
                <span className="feature-description">
                    {feature.description}
                </span>
            </div>
            <img
                className={`feature-img ${
                    feature.isReverse ? "feature-img-reverse" : ""
                }`}
                src={feature.img}
                alt={feature.alt}
            />
        </div>
    ));
};

export default ProjectFeatures;
