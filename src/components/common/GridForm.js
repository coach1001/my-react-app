import React from 'react';
import * as FORMS_DATA from './constants/gridFormConstants';
import math from 'mathjs';

class GridForm extends React.Component {
  
  componentWillMount(){
    this.setState({
      scopeData: this.props.scopeData
    })        
  }


  drawTable(){
    const formName = this.props.scopeData.data[0].form_name.replaceAll(' ','_').toUpperCase();
    const data = this.state.scopeData.data;
    const table = FORMS_DATA[formName];    

    table.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        data.map( (d, dI) =>{
          if(d.token === col.scopeVariable){
            table[rI].td[cI].value = d.value ? d.value : undefined;                      
          }
          return d;
        })
        return col;
      })
      return row;
    })
    console.log(table);

    return <div><table className="table-bordered" width="100%">
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
                        td.isCalculated ? <input id={td.scopeVariable} onChange={this.onChange.bind(this)} type='number' value={td.value} readOnly  className='form-control' style={td.style}/> : <input id={td.scopeVariable} onChange={this.onChange.bind(this)} value={td.value} type='number' className='form-control' style={td.style}/>
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
           <br/>    
           <button className="btn-block btn btn-lg btn-primary" onClick={this.CalculateAndSave.bind(this)}>Calculate and Save</button>
           </div>
  }

  CalculateAndSave(e){
    e.preventDefault();
    const oState = this.state;

    let scope = {};
    
    this.state.scopeData.data.map( (d) => {
      scope[d.token] = parseFloat(d.value,10);
      return d;
    });

    this.state.scopeData.data.map ( (d) =>{
      if(d.type === 'calculation'){
        scope[d.token]=math.eval(d.formula,scope);        
      }
      return d;
    });

    oState.scopeData.data.map( (d,index)=>{      
      oState.scopeData.data[index].value = scope[d.token];
      return d;
    });
    console.log(oState.scopeData.data);
    this.setState(oState);
  }

  onChange(e){
    e.preventDefault();    
    const oState = this.state;

    let index=0;
    let scopeData_ = {};
    

    this.state.scopeData.data.map( (d, index_) =>{
      if(e.target.id === d.token ){
        index = index_;
      }
      return d;
    });

    scopeData_ = this.state.scopeData.data[index];
    scopeData_.value = e.target.value;
    
    oState.scopeData.data[index] = scopeData_;
    this.setState(oState);

  }  
  render() {                          
      return <div> {this.props.scopeData ? this.drawTable() : null} </div>                    
  }
}

GridForm.propTypes = {
  scopeData: React.PropTypes.object,  
}

export default GridForm;