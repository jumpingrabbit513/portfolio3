import React from 'react';
import {Container} from 'react-bootstrap';
import "../index.css"
import { Link } from "react-router-dom";



const WorkCard = ({title, subtitle, description, imageURL, pageLink}) => {

    const goToProjectLink = () => {
        window.open(pageLink, "_self");
    }

    return (
        <div className='work-card'>
            <Link to={pageLink}>
            <img className="project-image" src={imageURL} alt="project image"/>
            </Link>

            <div className='card-bottom'>
            <h2 className='project-title m-0 mask overlay'>{title} </h2>
            <p className='project-subtitle lead'>{subtitle}</p>
            <p className="project-description">{description}</p> 
            </div>

        </div>
    )
}

export default WorkCard