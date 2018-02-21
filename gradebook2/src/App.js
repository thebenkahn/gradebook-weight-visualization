import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GradeForm from './components/Form';
import Chart from './components/Chart'
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';


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
        <PageHeader>
          <h1>Visual Gradebook</h1>
          <h6>An Open Source Project by Benjamin Kahn</h6>
        </PageHeader>
        <hr />
          This app will calculate gradeitem weight and display a chart to help you visualize the relative weight of each of your gradeable items.
        <br />
        <br />
        <GradeForm onGradeItemAdd={this.handleGradeItemAdd}/>
        <Chart gradeItems={this.state.gradeItems}/>
      </div>
    );
  }
}

export default App;
