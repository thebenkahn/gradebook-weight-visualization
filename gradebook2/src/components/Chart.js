import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import {defaults} from 'react-chartjs-2';

class Chart extends Component{


    render(){

      var gradeBookTotal = 0;
      var chartDataPoints = [];
      var chartDataLabels = [];

      {this.props.gradeItems.map(point => {
        gradeBookTotal = gradeBookTotal + Number(point.points);
        chartDataPoints.push(point.points)
        chartDataLabels.push(point.name)
      }
    )
  }

      return(
        <div>
          <h3>Total Gradebook points: {gradeBookTotal}</h3>

          {this.props.gradeItems.map(gradeItem => {
            return <li className="list-group-item"
              gradeitem={gradeItem}
              key={gradeItem.id}>{gradeItem.name}: {gradeItem.points}
              :  Weight: { ((gradeItem.points/gradeBookTotal) *100).toFixed(2)}% </li>
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
                  maintainAspectRatio: true
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
