import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Chart from './components/Chart'



//adding a comment about git
class App extends Component {

  state = {
    fields: {},
    gradeItems: []

  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
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

    

    {/*    <Chart name={this.state.fields.gradeItemName} points={this.state.fields.gradeItemPoints} gradeItems={this.props.gradeItems}/> */}
          <Chart gradeItems={this.state.gradeItems}/>

      </div>
    );
  }
}

export default App;
