import React from "react";
import { useParams, Link } from "react-router-dom";
import ProjectTile from "/src/components/ProjectTile";
import "/src/styles/pages/TopicPage.scss";

const TopicPage = ({ groupedProjects}) => {
    const {topicName} = useParams();
    const projects = groupedProjects[decodeURIComponent(topicName)];

    if(!projects){
        return <p>no projects for this topic!</p>
    }

    return (
        <div>
      <h1 className="drifting-title">{topicName}</h1>
      {projects.map((project) => (
            <ProjectTile
              key={project.title} // Unique key for each project
              title={project.title}
              projectType={project.projectType}
              year={project.year || "Year not provided"} // Use year if available
              topics={project.topics}
              languages={project.languages}
              video={project.video}
              image={project.image} 
              description={project.description}
              bgColor={project.bgColor || "default-color"} // Default color if none provided
            />
          ))}
          <Link to="/">Back to Topics</Link>
        </div>
      );
    };

export default TopicPage;