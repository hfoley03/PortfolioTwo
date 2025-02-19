// import '/src/index.css';
import '/src/styles/main.scss';

import '/src/styles/components/ProjectTile.scss';
import { Link } from 'react-router-dom';

import GithubLogo from  '/src/assets/github-96.svg';
import file100 from  '/src/assets/file-100.svg';

import React, { useRef } from "react";



const ProjectTile = ({ title, projectType, year, topics, languages, video, image, description, bgColor }) => {
    return (
        <div className={`card-grid ${bgColor}`}> 
            <div className="tile colour-primary-1">
                <h1>{title}</h1> 
                <h2>{projectType}</h2>
                <h2>{year}</h2>
                <h3> Links with icons </h3>
                <div className='tile links-grid'>
                    
                    <img src={GithubLogo} alt="github logo" />
                    <img src={file100} alt="file logo" />
                    <p> Code Repository</p>
                    <p> Thesis Document </p>



                </div>
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
            <div className="tile colour-primary-2 bordered">
                {/* {
                 <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight color="white" position={[0,0,5]} intensity={2}/>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
                </Canvas> 
                } */}
            </div>
            <div className="tile colour-primary-2 bordered">
                <h2>Description</h2> {/* Description */}
                <p>{description.join(" ")}</p> {/* Join description into a single paragraph */}
            </div>
        </div>
    );
};

export default ProjectTile;
