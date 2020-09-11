import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <center><p><b style={{alignItems: "center",fontVariant: "petite-caps"}}>{project.name}</b></p></center>
            <p><b style={{fontVariant: "petite-caps"}}>Description:</b> {project.description}</p>
            <p><b style={{fontVariant: "petite-caps"}}>Link:</b> <a href={project.link} target="blank">{project.link}</a> </p>
        </div>
    )
}