import React, { useContext } from "react";
import Button from "./Button";
import { ProjectsContext } from "./contexts/ProjectsProvider";
import "../../assets/styles/FeaturedProjects.scss";

const FeaturedProjects = (props) => {
    const { projects } = useContext(ProjectsContext);

    return (
        <div className={props.className}>
            <h2>Feature projects</h2>
            <div className="related-container">
                {projects.map((project) => (
                    <div key={project.id} className="related">
                        <img
                            className="related-img"
                            src={project.imgLq}
                            alt={project.name}
                        />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Button
                            url={project.url}
                            color={project.color}
                            size={"small"}
                        >
                            View case
                        </Button>
                    </div>
                ))}
            </div>

            <div className="more-projects">
                <h2>And there are more...</h2>
                <Button url={"/#projects"}>Discover all</Button>
            </div>
        </div>
    );
};

export default FeaturedProjects;
