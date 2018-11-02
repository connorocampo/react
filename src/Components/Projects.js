import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
// import logo from './logo.svg';
// import './App.css';

class Projects extends Component {
  render() {
  let projectItems;
  if(this.props.projects){
      projectItems = this.props.projects.map(project => {
            // console.log(project);
            return (
                <ProjectItem key={project.title} project={project} />
            );
        });
  }
    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
