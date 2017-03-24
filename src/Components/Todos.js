import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todoItems;

    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        // console.log(project);
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    console.log(this.props);
    return (
      <div className="Todos">
        <h3>To Do List</h3>
        {todoItems}
      </div>
    );
  }
}

// Property types for validation (good practices)

Todos.propTypes = {
  todos: React.PropTypes.array,
}

export default Todos;
