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
        <h3 class="add-project">Add Project To List By Category</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label class="labels project">Project</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label class="labels category">Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <input class="submit"type="submit" value="submit" />
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
