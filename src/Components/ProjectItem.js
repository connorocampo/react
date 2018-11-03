import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <button onClick={this.deleteProject.bind(this, this.props.project.id)}>x</button>
      </li>
    );
    }
}

// ProjectItem.propTypes = {
//     project: React.PropTypes.object,
//     onDelete: React.PropTypes.func
// }

export default ProjectItem;

// <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
