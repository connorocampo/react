import React, { Component } from 'react';
import uuid from 'uuid';
// import logo from './logo.svg';
// import './App.css';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e){
        if(this.refs.title.value === '' ){
            alert('Add a project name to continue submission.');
        } else {
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3 className="add-project">To Do List</h3>
        <p className="description">Try it out! Add a project to this To Do List and select an appropriate category for it. Then, click SUBMIT to add it to the Latest Projects List. You can also remove projects from the Latest Projects List by clicking on the X marked button.</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label className="labels project">Project</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label className="labels category">Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <input className="submit"type="submit" value="submit" />
            <br />
        </form>
      </div>
    );
    }
}

// AddProject.propTypes = {
//     categories: React.PropTypes.array,
//     addProject: React.PropTypes.func
// }

export default AddProject;
