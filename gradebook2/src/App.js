import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Chart from './components/Chart'



//adding a comment about git
class App extends Component {

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };



  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)}/>

        <Chart name={this.state.fields.gradeItemName} points={this.state.fields.gradeItemPoints}/>

      </div>
    );
  }
}

export default App;
