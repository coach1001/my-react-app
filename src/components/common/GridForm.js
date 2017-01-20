import React from 'react';
import { SIEVE_ANALYSIS, FREE_FALLING_OBJECT_VELOCITY } from './constants/gridFormConstants';

class GridForm extends React.Component {
  
  componentWillMount(){
   
  }

  drawTable(){
    const table = FREE_FALLING_OBJECT_VELOCITY;

    return <table className="table-bordered" width="100%">
              <tbody>
              {
                table.map( (tr, trIndex) =>
                  <tr key={trIndex} style={tr.style}>
                  {
                    tr.td.map( (td, tdIndex) =>
                      {
                       return !td.isInput ? <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.value}</td> :
                       <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                       {
                        td.isCalculated ? <input type='number' disabled className='form-control' style={td.style}/> : <input type='number' className='form-control' style={td.style}/>
                       }                        
                       </td>
                      } 
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