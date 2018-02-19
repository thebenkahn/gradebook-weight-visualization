import React, {Component} from 'react';
import Chart from './Chart'
import App from '../App'
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';




class GradeForm extends Component {
  state = {
    gradeItemName: '',
    gradeItemPoints: '',
    gradeitemWeight: '',
    text: 'hello world',
  };



  onChange(greeting, greeting2){
    console.log('changing text...')
  }

  onSubmit = (e) => {
    e.preventDefault();
    var text = this.refs.text.value.trim();
    var points = this.refs.points.value;

      if(!text){
        alert('Please enter a grade item.')
        return;
      } //else if(isNaN(points)) {
        else if(isNaN(points) || points > 100 || points <= 0) {
        alert('Please enter a numeric point value between 1 and 100')
        return;
      }
        this.props.onGradeItemAdd(text, points);
        this.refs.text.value = '';
        this.refs.points.value = '';
        this.refs.text.focus();
    }

    changeText = (e) => {
    this.setState({text: e.target.value});
    }

render(){
  return (

    <div>
      <h2>My Gradebook Weight Calculator</h2>
      <br/>
    {/*   <h1>current state text is {this.state.text}</h1> */}
      <form onSubmit={this.onSubmit}>
        <FormGroup
            controlId="formGradeItem"
          >

          <div className="form-group">
            <input type="text" ref="text" onChange={this.onChange} class="form-control" placeholder="Item Name"></input>
            <input type="text" ref="points" onChange={this.onChange} class="form-control" placeholder="Point Value"></input>
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit">Create Grade Item</Button>
            </ButtonToolbar>
          </div>
          </FormGroup>
    </form>
  </div>
  )
}
}



export default GradeForm;
