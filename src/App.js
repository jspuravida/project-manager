import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();

    // Setting the state here, the state is then passed to Projects component as a property. This usually isn't where the data goes, only states and keys. Use lifecycle method instead (component will mount)

    this.state = {
      projects: [],
      todos: []
    }
  }

// Below is the lifecycle method. If you are instead fetching data from an outside API, you will also do it in this lifecycle method as well, or in componentDidMount

// Create a function called getTodos, getProjects, then just call them in the componentWill/DidMount. Makes things cleaner.

// Now this will fetch the To Do List. We can do this with modules, but we'll use Jquery.
getTodos(){
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  })
}

getProjects(){
  this.setState({projects: [
        {
          id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
    ]});
}

// Now since we are calling the functions in these lifecycle methods below, we will have the data from the API as soon as the page is loaded.

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();    
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
        {/*This shows how you can bring in data from an API and bring it into our state,then publish it down to components through properties. I used a GET request for this, but I could also use a POST request to submit data to an API/external databases and so on. */}
      </div>
    );
  }
}

export default App;
