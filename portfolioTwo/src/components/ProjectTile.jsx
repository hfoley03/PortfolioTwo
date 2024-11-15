import React from 'react';
import '/src/index.css';
import '/src/styles/ProjectTile.css';

const ProjectTile = ({ title, projectType, year, topics, video, image, description, bgColor }) => {
    return (
        <div className={`card-grid ${bgColor}`}> {/* Dynamic background color */}
            <div className="tile colour-primary-1">
                <h1>{title}</h1> {/* Project Title */}
                <h2>{projectType}</h2>
                <h2>{year}</h2> {/* Year */}
            </div>
            <div className="tile colour-primary-2 grid-col-span-2">
                {video ? ( // Render video or image depending on the data
                    <iframe 
                        src={video} 
                        title={title} 
                        width="560" 
                        height="315" 
                        allowFullScreen 
                    />
                ) : image ? (
                    <img src={image} alt={title}/>
                ) : (
                    <p>No video available</p>
                )}
            </div>
            <div className="tile colour-primary-1">
                <h2>Topics:</h2> {/* Topics */}
                <ul>
                    {topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
            <div className="tile colour-primary-1">
                <h2>Description:</h2> {/* Description */}
                <p>{description.join(" ")}</p> {/* Join description into a single paragraph */}
            </div>
        </div>
    );
};

export default ProjectTile;
