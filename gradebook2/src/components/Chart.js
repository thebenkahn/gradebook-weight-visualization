import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import {defaults} from 'react-chartjs-2';

class Chart extends Component{


    render(){

      var gradeBookTotal = 0;
      var chartDataPoints = [];
      var chartDataLabels = [];

      {this.props.gradeItems.map(item => {
        gradeBookTotal = gradeBookTotal + Number(item.points);
        chartDataPoints.push(item.points)
        chartDataLabels.push(item.name)
      }
    )
  }

      return(
        <div>
          <h3>Total Gradebook points: <span className="totalPoints">{gradeBookTotal}</span></h3>

          {this.props.gradeItems.map(gradeItem => {
            return <li className="list-group-item"
              gradeitem={gradeItem}
              key={gradeItem.id}> <strong>Name: </strong>{gradeItem.name}<strong> | Point Value:   </strong> {gradeItem.points}
            <strong>  |  Weight: </strong> { ((gradeItem.points/gradeBookTotal) *100).toFixed(2)}% </li>
          }
        )
      }

            <Doughnut
              data={{labels:
                        chartDataLabels,
                      datasets: [{
                        data:
                            chartDataPoints,
                        backgroundColor: ['#00427F', '#4CA9FF', '#00BF9A', '#483D99', '#5B51FF', '#21FFEA', '#52FFB8', '#0680CC', '#069DCC', '#759951']
                      }]
                }}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                  layout: {
                    padding: {
                        left: 25,
                        right: 0,
                        top: 15,
                        bottom: 0,
                    }},
                    legend: {
                      display: true,
                      position: 'right'
                    }
                  }}
              />

      {/*<Doughnut
            data={{labels:[
              "seattle",
              "portland",
              'san fran'
            ],
                  datasets: [{
                    data: [35, 50, 40],
                    backgroundColor: ['#00427F', '#4CA9FF', '#00BF9A']
                  }]
            }}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true
              }}
          />*/}

        </div>
      )
  	}
  }

Chart.defaultProps = {name: 'enter name'}


export default Chart;
