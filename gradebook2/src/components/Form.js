import React, {Component} from 'react';
import Chart from './Chart'
import App from '../App'
import { Button } from 'react-bootstrap';



class Form extends Component {
  state = {
    gradeItemName: '',
    gradeItemPoints: '',
    gradeitemWeight: '',
    text: 'hello world',
  };



  onChange(greeting, greeting2){
    console.log('changing text...')
  }


  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
    this.getChartData();
  };

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
    }

    getChartData() {
      //return <App name={this.state.gradeItemName} points={this.state.gradeItemPoints} gradeItems={this.state.gradeItems}/>
    }

    changeText = (e) => {
    this.setState({text: e.target.value});
    }

render(){
  return (

    <div>
      <h2>My Gradebook Weight Caulculator</h2>
      <br/>
    {/*   <h1>current state text is {this.state.text}</h1> */}
      <form onSubmit={this.onSubmit}>
          <div className="form-group">
          {/*  <span><h3>Old Way</h3></span>
            <br />
            <input name="gradeItemName" placeholder='Grade Item' value={this.state.gradeItemName} onChange={e => this.change(e)} />
            <br/>
           <input name="gradeItemPoints" placeholder='Point Value' value={this.state.gradeItemPoints} onChange={e => this.change(e)} />
            <br/>
            */}
            <span><h3>New Way</h3></span>
          {/*  <input type="text" onChange={this.changeText} value={this.state.text}></input> */}
            <input type="text" ref="text" onChange={this.onChange} class="form-control" placeholder="Item Name"></input>
            <input type="text" ref="points" onChange={this.onChange} class="form-control" placeholder="Point Value"></input>
            <button type="submit">Create Grade Item</button>
          </div>
    </form>


    </div>
  )
}
}



export default Form;
