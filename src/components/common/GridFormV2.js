import React from 'react';
import {methods} from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';
import { fetchSampleMethod, updateSampleMethod } from '../../actions/sampleMethods';
import Confirm from 'react-confirm-bootstrap';

class GridForm extends React.Component {
  
  componentWillMount(){                      
    const index = methods.findIndex( (element) => {    
    if(element.code === this.props.methodCode){
        return element;
      }else{
        return null;
      }
    });
    
    const method = methods[index];        
    const table = method.grid;
    
    this.setState({
      scopeData: this.props.scopeData,
      table : table,
      method: method,
      sampleMethod: this.props.sampleMethod,
    })    
  }

  onChangeComplete(e){
    let oState = this.state;
    oState.sampleMethod.completed = !oState.sampleMethod.completed;
    this.setState(oState);
  }

  drawTable(){    
    const data = this.state.scopeData;    
    const table = this.state.table;    
    table.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        data.map( (d, dI) =>{
          if(d.symbol === col.scopeVariable){
            table[rI].td[cI].value = d.value ? d.value : 0;                      
          }
          return d;
        })
        return col;
      })
      return row;
    })
        
    return <div>
    <label style={{fontSize: '1.3em', fontWeight:'normal'}}><input name="completed" type="checkbox" onChange={this.onChangeComplete.bind(this)} checked={this.state.sampleMethod.completed} />&nbsp;Completed</label>                                
    <button className="hidden-print btn-block btn btn-lg btn-success" onClick={this.CalculateAndSave.bind(this)}>Calculate and Save</button>            
    <br/>

    <div className="table-bordered" style={{ padding: "10px"}}>  
    
    <br/>          
            <table className="table-bordered fixed" width="100%" >              
              <tbody>
              {                                  
                           
                  table.map( (tr, trIndex) =>                
                      
                      
                      <tr key={trIndex} style={tr.style}>
                      {
                        tr.td.map( (td, tdIndex) =>
                          {
                           return !td.isInput ? <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.label}</td> :
                           <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                           {
                            td.isCalculated ? 

                              <input  id={td.scopeVariable} onChange={this.onChange.bind(this)} step="0.01" type='number' value={td.value} readOnly className='form-control' style={td.style}/> :


                            <input id={td.scopeVariable} onChange={this.onChange.bind(this)} step="0.01" value={td.value} type='number' className='form-control' style={td.style}/>
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
           </div>
           <br/>    
           
           
          
    </div>    
  }
  
  goBack(){
    this.context.router.goBack();
  }

  saveData(oState){            
    oState.scopeData.map( (row, rI) => {      
      
      if(row.id && row.input_type !== 'constant'){        
        if(row.ignoreUpdate){}
        else{
          sendRow(`sample_has_variables?id=eq.${row.id}`,{value: row.value},'patch');  
        }              
      }else if(row.type !== 'constant'){

        sendRow('sample_has_variables',{          
          sample: this.props.sampleId,
          variable: row.variable_id,
          value: row.value
        },'post').then( (res) =>{          
          row.id = res.data.id;
        });

      }
      return row;
    }) 

    sendRow(`sample_has_methods?id=eq.${this.state.sampleMethod.id}`,{completed: this.state.sampleMethod.completed},'patch');
    this.setState(oState);
  }

  parseInput(oState){
    let scope = {};        
    oState.scopeData.map( (d) => {          
        if(d.input_type === 'in'){
            try{        
              scope[d.symbol] = Math.round(parseFloat(d.value,10)*100)/100;
              if(isNaN(scope[d.symbol])){
                scope[d.symbol] = 0;
              }
            }catch(err){
              scope[d.symbol] = 0;
            }      
        }
      return d;
    });
        
    oState.scopeData.map ( (d) =>{      
      if(d.input_type === 'calc'){
        try{        
          scope[d.symbol]=Math.round(math.eval(d.formula,scope)*100)/100;               
        }catch(err){

          console.log(d.symbol,'error',err);
          scope[d.symbol]= 0;                
        }        
      }      
      
      if(isFinite(scope[d.symbol])){

      }else{
        scope[d.symbol] = 0;
      }
      if(isNaN(scope[d.symbol])){
        scope[d.symbol] = 0;
      }

      
      return d;
    });    

    oState.scopeData.map( (d,index)=>{            
      if(oState.scopeData[index].value === scope[d.symbol]){
        oState.scopeData[index].ignoreUpdate = true;        
      }else{
        oState.scopeData[index].ignoreUpdate = false;        
      }
      
      oState.scopeData[index].value = scope[d.symbol];            
      return d;
    
    });        
    this.saveData(oState);
  }
  
  CalculateAndSave(e){
    e.preventDefault();
    const oState = this.state;
    this.parseInput(oState);        
  }

  onChange(e){
    e.preventDefault();    
    const oState = this.state;

    let index=0;
    let scopeData_ = {};
    

    this.state.scopeData.map( (d, index_) =>{
      if(e.target.id === d.symbol ){
        index = index_;
      }
      return d;
    });

    scopeData_ = this.state.scopeData[index];
    scopeData_.value = Math.round(e.target.value*100)/100;    

    oState.scopeData[index] = scopeData_;
    this.setState(oState);
  }
  render() {                          
      return <div> 
      {this.state.scopeData ? this.drawTable() : null} 
    </div>                    
  }
}

GridForm.propTypes = {
  scopeData: React.PropTypes.array.isRequired,
  methodCode: React.PropTypes.string.isRequired,
  sampleId: React.PropTypes.number.isRequired,
  sampleMethod: React.PropTypes.object.isRequired,  
}

GridForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default GridForm;