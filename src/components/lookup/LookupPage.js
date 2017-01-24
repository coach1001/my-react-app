import React from 'react';
//import CascadeSelect from '../common/CascadeSelect';
//import { CASCADE_DATA_LOCATION_CITY, CASCADE_DATA_LOCATION_PROVINCE, CASCADE_DATA_LOCATION_SUBURB } from '../common/constants/constants';
import { connect } from 'react-redux';
//import Datetime from 'react-datetime';
import { VictoryArea, VictoryLabel, VictoryChart, VictoryAxis } from 'victory';


const data = [
  { x:75, y:100},  
  { x:53, y:100},
  { x:37.5, y:99},
  { x:26.5, y:97},
  { x:19.0, y:92},
  { x:13.2, y:20},
  { x:4.75, y:10},
  { x:2.0, y:5},
  { x:0.425, y:2.5},
  { x:0.075, y:0.01},  
];

class LookupPage extends React.Component {

	componentWillMount(){	
  
  }
  
  componentDidMount(){
    this.forceUpdate();
  }
  onClick(e){
    e.preventDefault();
    window.print();
  }
  render() {  		  					  
      let labels = [];
      
      let stylex = {
        tickLabels: { fontSize: 10,  writingMode: 'tb', textAnchor: 'start' }, 
        grid: {stroke: 'lightgrey'},            
        axisLabel: {fontSize: 12},
        ticks: {stroke: "grey"}
      };

      let styley = {
        tickLabels: { fontSize: 10}, 
        grid: {stroke: 'lightgrey'},        
        axisLabel: {fontSize: 12},
        ticks: {stroke: "grey"}
      };
      
      let line = {
        data: {
          fill: "limegreen", opacity: 0.5, strokeWidth: 1, stroke: 'darkgreen'          
        }
      }      

      data.map( (point) => {
        labels.push(point.x)
        return point;
      });

      return (
        <div>
            <div>
              <button className="btn btn-lg btn-primary btn-block hidden-print" onClick={this.onClick.bind(this)} >Print</button>            
              <br className="hidden-print" ></br><br className="hidden-print"></br>
            </div>
        
                <div className="page">        
                     

                    <VictoryChart scale={ { x: 'log', y: 'linear' }}>
                      <VictoryAxis label="Sieve Sizes" tickValues={labels} style={stylex} tickLabelComponent={<VictoryLabel dy={-1.5}/>}
                      axisLabelComponent={<VictoryLabel dy={1.2}/>}
                      tickFormat={ (tick) =>{
                        return `${tick} mm`;
                      }} />
                      <VictoryAxis label="Percentage Passing" dependentAxis style={styley} tickFormat={ (tick) =>{return `${tick}%`;}}
                        tickLabelComponent={<VictoryLabel dx={9} />}
                        axisLabelComponent={<VictoryLabel dy={-0.5}/>}
                      />
                      <VictoryArea data={data} interpolation='basis' style={line} />                
                    </VictoryChart>
              
              </div>

        </div>        
    );          
  }
}

export default connect(null,{ })(LookupPage); 

