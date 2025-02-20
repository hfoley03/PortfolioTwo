// import '/src/index.css';
import '/src/styles/main.scss';

import '/src/styles/components/ProjectTile.scss';
import { Link } from 'react-router-dom';
import React, { useRef, process } from "react";


const ProjectTile = ({ title, projectType, year, gitLink, otherLink, topics, languages, video, image, description, bgColor }) => {
    return (
        <div className={`card-grid ${bgColor}`}> 
            <div className="tile colour-primary-1">
                <h1>{title}</h1> 
                <h2>{projectType}</h2>
                <h2>{year}</h2>
                <div className='tile links-grid'>
                    {gitLink.length > 0 && (
                        <a href={gitLink} target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}svg/github-96.svg`} alt="github" height={125}/>
                        </a>
                    )}
                    {otherLink.length > 0 && (
                        <a href={otherLink} target="_blank" rel="noopener noreferrer">
                            <img src={`${import.meta.env.BASE_URL}svg/file-100.svg`} alt="github" height={90} width={125}/>
                        </a>
                    )}
                </div>
            </div>
            <div className="tile tile-media colour-primary-2 grid-col-span-2">
                {video ? ( // Render video or image depending on the data
                    <iframe 
                        src={video} 
                        title={title} 
                        width="560" 
                        height="315" 
                        allowFullScreen 
                    />
                ) : image ? (
                    // <img src={image} alt={title}/>
<img src={`${import.meta.env.BASE_URL}images/${image}`} alt="Night screen" />

                ) : (
                    <p>No video available</p>
                )}
            </div>
            <div className="tile colour-primary-2">
            </div>
            <div className="tile colour-primary-2 bordered">
                <h2>Topics</h2>
                <ul>
                    {topics.map((topic, index) => (
                        <li key={index}>
                            <Link to={`/topic/${encodeURIComponent(topic)}`}>{topic}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tile colour-primary-2 bordered">
                <h2>Languages</h2>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tile tile-text bordered">
                <h2>Description</h2>
                {description.map((sentence, index) => (
                    <p key={index}>{sentence}</p>
                ))}            
            </div>
        </div>
    );
};

export default ProjectTile;
