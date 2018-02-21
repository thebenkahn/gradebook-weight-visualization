import React, {Component} from 'react';
import Chart from './Chart'
import App from '../App'
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

class GradeForm extends Component {
  state = {
    gradeItemName: '',
    gradeItemPoints: '',
    gradeitemWeight: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    var text = this.refs.text.value.trim();
    var points = this.refs.points.value;
      //todo - move validation to Bootstrap form control
      if(!text){
        alert('Please enter a grade item.')
        return;
      }
        else if(isNaN(points) || points > 100 || points <= 0) {
        alert('Please enter a numeric point value between 1 and 100')
        return;
      }
        this.props.onGradeItemAdd(text, points);
        this.refs.text.value = '';
        this.refs.points.value = '';
        this.refs.text.focus();
    }


render(){
  return (
    //todo enhance Bootstrap on form
    <div>
      <form inline onSubmit={this.onSubmit}>
        <FormGroup bsSize="large" controlId="formGradeItem">
          <div className="form-group">

            <input type="text" ref="text" class="form-control" placeholder="Item Name"></input>

            <input type="text" ref="points" class="form-control" placeholder="Point Value"></input>
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large" type="submit" block>Create Grade Item</Button>
            </ButtonToolbar>
          </div>
          </FormGroup>
    </form>
  </div>
  )
}
}
export default GradeForm;
