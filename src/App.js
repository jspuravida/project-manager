import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();

    // Setting the state here, the state is then passed to Projects component as a property. This usually isn't where the data goes, only states and keys. Use lifecycle method instead (component will mount)

    this.state = {
      projects: []
    }
  }

// Below is the lifecycle method. If you are instead fetching data from an outside API, you will also do it in this lifecycle method as well, or in componentDidMount

  componentWillMount(){
    this.setState({projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
