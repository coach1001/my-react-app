import React from 'react';
import { TEST, SIEVE_ANALYSIS } from './constants/gridConstants';

class GridForm extends React.Component {
  
  componentWillMount(){
   
  }

  drawTable(){
    const table = SIEVE_ANALYSIS;
    
    return <table className="table table-bordered">
              <tbody>
              {
                table.map( (tr, trIndex) =>
                  <tr key={trIndex} style={tr.style}>
                  {
                    tr.td.map( (td, tdIndex) =>
                       <td key={tdIndex} colSpan={td.colSpan} rowSpan={td.rowSpan} style={td.style}>{td.value}</td> 
                    )
                  }
                  </tr>
                )
              }
              </tbody>
           </table>      
    
  }

  render() {                          
      
      const grid = (this.drawTable());
      
      return <div>{grid}</div>                   
  }
}

export default GridForm;