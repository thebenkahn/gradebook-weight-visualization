import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Chart from './components/Chart'



//adding a comment about git
class App extends Component {

  state = {
    gradeItems: []
  };

  handleGradeItemAdd = (name, points) => {
    var newGradeItem = {
      id: this.state.gradeItems.length + 1,
      name: name,
      points: points
      }

      this.setState({gradeItems: this.state.gradeItems.concat(newGradeItem)});
  }

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} onGradeItemAdd={this.handleGradeItemAdd}/>
        <Chart gradeItems={this.state.gradeItems}/>
      </div>
    );
  }
}

export default App;
