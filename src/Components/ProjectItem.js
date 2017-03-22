import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id){
        // to pass it up to app and delete it on app , it needs to be passed to projects, then to app. You do this by setting a property (a prop), below. 
        this.props.onDelete(id);

        console.log('test');
    }
  render() {
    console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    //   We want to add a delete button, so we make the link above, then create the function above, below the class.
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
