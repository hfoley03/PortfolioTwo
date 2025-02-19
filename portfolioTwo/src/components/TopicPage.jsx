import React from "react";
import { useParams, Link } from "react-router-dom";
import ProjectTile from "/src/components/ProjectTile";
import "/src/styles/pages/TopicPage.scss";
import TopicPageTitle3D from '/src/components/TopicPageTitle3D'; 


const TopicPage = ({ groupedProjects}) => {
    const {topicName} = useParams();
    const projects = groupedProjects[decodeURIComponent(topicName)];

    if(!projects){
        return <p>no projects for this topic!</p>
    }

    return (
        <div>
          <div>
          <h1 className="center title">{topicName}  Projects</h1>
          </div>
      {projects.map((project) => (
            <ProjectTile
              key={project.title} 
              title={project.title}
              projectType={project.projectType}
              year={project.year || "Year not provided"} 
              topics={project.topics}
              languages={project.languages}
              video={project.video}
              image={project.image} 
              description={project.description}
              bgColor={project.bgColor || "default-color"}
            />
          ))}
          <Link to="/">Back to Topics</Link>
        </div>
      );
    };

export default TopicPage;