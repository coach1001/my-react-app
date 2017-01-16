import React from 'react';
//import CascadeSelect from '../common/CascadeSelect';
import GridForm from '../common/GridForm';
//import { CASCADE_DATA_LOCATION_CITY, CASCADE_DATA_LOCATION_PROVINCE, CASCADE_DATA_LOCATION_SUBURB } from '../common/constants/constants';
import { connect } from 'react-redux';
//import Datetime from 'react-datetime';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLine } from 'victory';


/*const data = [
  { x: 1.0, y:1.0},
  { x: 1.1, y:2.14},
  { x: 1.2, y:4.3},
  { x: 1.3, y:8.16},
  { x: 1.4, y:14.8},
  { x: 1.5, y:25.6},
  { x: 1.6, y:42.9},
];*/

const data = [
  { x:75, y:100},  
  { x:53, y:100},
  { x:37.5, y:90},
  { x:26.5, y:70},
  { x:19.0, y:50},
  { x:13.2, y:20},
  { x:4.75, y:5},
  { x:2.0, y:1},
  { x:0.425, y:0.1},
  { x:0.075, y:0.01},  
]

//const xValues = ['1.0mm','2.14mm','4.3mm','8.16mm','14.8mm','25.6mm','42.9mm'];
class TickLabel extends React.Component {
  render() {
    console.log(this.props);
    return <div><h1>{this.props.datum}</h1></div>
  }
}


class LookupPage extends React.Component {

	componentWillMount(){	
  }
  
  render() {  		  					  
      let labels = [];
      let style = {
        tickLabels: { fontSize: 8}, grid: {stroke: 'grey'}
      };
      
      data.map( (point) => {
        labels.push(point.x)
        return point;
      });

      return (        
        <div className="page-landscape">            
             <GridForm />                         
             
             <table className="table table-bordered">
                <tbody>
                <tr>
                  <td width={400} height={100}> 
                    <VictoryChart scale={ { x: 'log', y: 'linear' }}>
                      <VictoryAxis tickValues={labels} style={style}  
                      tickFormat={ (tick) =>{
                        return tick;
                      }} />
                      <VictoryAxis dependentAxis style={style}/>
                      <VictoryLine data={data} interpolation='basis' />                
                    </VictoryChart>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>                
              </tbody>
            
            </table>
        </div>        
    );          
  }
}

export default connect(null,{ })(LookupPage); 

