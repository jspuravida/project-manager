import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  // This prop passes it up to the main component, app 

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;

    // Set the variable, then we map through this array, and outputting a projectItem Component, which has each objects title and category

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    console.log(this.props);
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

// Property types for validation (good practices)

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
