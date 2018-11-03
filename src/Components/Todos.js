import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import logo from './logo.svg';
// import './App.css';

class Todos extends Component {
    render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
            return (
                <TodoItem key={todo.title} todo={todo} />
            );
        });
    }
    return (
      <div className="Todos">
      <h3>A Simple To Do List</h3>
        {todoItems}
      </div>
    );
    }
}

// Todos.propTypes = {
//     todos: React.PropTypes.array
// }

export default Todos;
