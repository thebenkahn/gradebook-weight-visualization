import React, {Component} from 'react';
import Chart from './Chart'
import App from '../App'
import { Button } from 'react-bootstrap';
//import { Form } from 'react-bootstrap';
//import { Input } from 'react-bootstrap';

class gradeForm extends Component {
  state = {
    gradeItemName: '',
    gradeItemPoints: '',
    gradeitemWeight: ''
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
    this.getChartData();
  };

  onSubmit = (e) => {
    e.preventDefault();

    }

    getChartData() {
      return <App name={this.state.gradeItemName} points={this.state.gradeItemPoints}/>
    }

render(){
  return (

    <div>
      <h2>My Gradebook Weight Caulculator</h2>
      <br/>
      <input name="gradeItemName" placeholder='Grade Item' value={this.state.gradeItemName} onChange={e => this.change(e)} />
      <br/>
      <input name="gradeItemPoints" placeholder='Point Value' value={this.state.gradeItemPoints} onChange={e => this.change(e)} />
      <br/>
    </div>
  )
}

}

export default gradeForm;
