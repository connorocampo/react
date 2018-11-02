import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
// import logo from './logo.svg';
// import './App.css';
// Turn './App.css' back on if needed

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

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
        console.log(project);
    }

    render() {
    console.log(this.props);
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
    }
}

export default App;
