const groupProjectsByTopic = (projects) => {
    const topicsMap = {};
    projects.forEach((project) => {
      project.topics.forEach((topic) => {
        if (!topicsMap[topic]) {
          topicsMap[topic] = [];
        }
        topicsMap[topic].push(project);
      });
    });
    return topicsMap;
  };
  
  export default groupProjectsByTopic;
  