import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import {defaults} from 'react-chartjs-2';

class Chart extends Component{



    render(){
      return(
        <div>
          <h3>Your Gradebook total is: {this.props.points}</h3>
          <br />
          Your gradeitem name is {this.props.name}
          <br />

          <Doughnut
            data={{labels:[this.props.name, 'course'],
                  datasets: [{
                    data: [this.props.points, 100 - this.props.points],
                    backgroundColor: ['#00427F', '#4CA9FF']
                  }]
            }}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
              }}
          />

        </div>
      )
  	}
  }

Chart.defaultProps = {name: 'enter name'}

export default Chart;
