import React from "react";

import Project from "./Project.jsx";
import ProjectData from "./ProjectData.js"

export default function Portfolio () {
    const ProjectElement = ProjectData.map(project => {
        return <Project 
                key={project.id}
                id = {project.id}
                title={project.title} 
                role={project.role} 
                description={project.description}
                path = {project.path}/>
    })

    return (
        <section className="p-5 bg-secondary-light " id="Portfolio">
                <div className="container">
                    <h2 className="text-center mb-5">Portfolio</h2>
                        {ProjectElement}

                    
                </div>
        </section>
    )
}