import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    console.log(this.props);
    return (
      <li className="ToDo">
        <strong>{this.props.todo.title}</strong>
      </li>
    //   We want to add a delete button, so we make the link above, then create the function above, below the class.
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;
