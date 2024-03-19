import React from "react";
import Video1 from "./Video_FoundIt.mp4";
import ProjectData from "./ProjectData.js"

export default function Portfolio () {

    const ProjectElements = ProjectData.map(project => (
        <div className="container-FoundIt px-0 row align-items-center justify-content-between mb-5"
        key={project.id}>
            <div className="container col-md pe-5">
                    <h1 className="mb-5">{project.title}</h1>
                    <h4 className="mb-2">{project.role}</h4>
                    <p className="text-dark lead">{project.description}</p>
                    {project.id === 1 ? 
                    <>
                    </>
                    : <a href={project.link}>
                        <button className="btn btn-lg bg-warning mb-5">Click Me!</button>
                    </a>}
            </div>
            <div className="cointaner col-md">
                {project.id === 1 ?
                <>
                    <div className="phone-frame">
                        <div className="screen">
                            <video autoPlay controls className="Vid-FoundIt">
                            <source src={Video1} type="video/mp4"/>
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </> :
                <>
                    <div className="container col-md">
                        {project.pictures && project.pictures.map((picture,index) => (
                            <div key={index} className="container row mb-3">
                                <img src={picture} className="d-block w-100" alt={picture}/>
                            </div>
                        ))}

                        </div>   

                </>}
            </div>
        </div>
    ))

    return (
        <section className="p-5 bg-secondary-light " id="Portfolio">
                <div className="container">
                    <h2 className="text-center mb-5">Portfolio</h2>
                        {ProjectElements}
                </div>
        </section>
    )
 }