// import '/src/index.css';
import '/src/styles/main.scss';

import '/src/styles/components/ProjectTile.scss';
import { Link } from 'react-router-dom';

import GithubLogo from  '/src/assets/github-96.svg';
import file50 from  '/src/assets/file-50.svg';
import file100 from  '/src/assets/file-100.svg';



import React, { useRef } from "react";
import {Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// function SceneBasic() {
//     const gltf = useLoader(GLTFLoader, '/coneman.gltf');
//     return (
//       <primitive 
//         object={gltf.scene} // Render the 3D model
//         scale={[0.5, 0.5, 0.5]} // Adjust the size if necessary
//         position={[0, 0, 0]} // Set the position
//         rotation={[0, Math.PI / 4, 0]} // Optional rotation
//       />
//     );
//   };

const ProjectTile = ({ title, projectType, year, topics, languages, video, image, description, bgColor }) => {
    return (
        <div className={`card-grid ${bgColor}`}> 
            <div className="tile title-tile colour-primary-1">
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
                <h2>Topics:</h2> {/* Topics */}
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
                {
                 <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight color="white" position={[0,0,5]} intensity={2}/>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
                </Canvas> 
                }
            </div>
            <div className="tile colour-primary-2 bordered">
                <h2>Description:</h2> {/* Description */}
                <p>{description.join(" ")}</p> {/* Join description into a single paragraph */}
            </div>
        </div>
    );
};

export default ProjectTile;
