import React from 'react';
import {methods} from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';
import { fetchSampleMethod, updateSampleMethod } from '../../actions/sampleMethods';
import Confirm from 'react-confirm-bootstrap';
/*import TeX from 'react-formula-beautifier';*/

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
    const colLayout = method.colLayout;

    this.setState({
      scopeData: this.props.scopeData,
      table : table,
      method: method,
      sampleMethod: this.props.sampleMethod,
      colLayout: colLayout,
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
    const col = this.state.colLayout;

    table.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        data.map( (d, dI) =>{
          if(d.symbol === col.scopeVariable){
   
            if(d.unit === 'string'){
              table[rI].td[cI].value_string = d.value_string ? d.value_string : ( d.default_value ? d.default_value : '');  
            }else{
              table[rI].td[cI].value = d.value ? d.value : ( d.default_value ? d.default_value : undefined);  
            }
            
            table[rI].td[cI].unit = d.unit ? d.unit : undefined;
            table[rI].td[cI].min = d.minimum ? d.minimum : undefined;
            table[rI].td[cI].max = d.maximum ? d.maximum : undefined;            
            table[rI].td[cI].step = d.step ? d.step : 0.01;
            table[rI].td[cI].type = d.input_type ? d.input_type : undefined;
          }
          return d;
        })
        return col;
      })
      return row;
    })
        
    return <div>
     <div className="input-group checkbox">
      <label style={{fontSize: '1.3em', fontWeight:'normal'}}><input name="completed" type="checkbox" onChange={this.onChangeComplete.bind(this)} checked={this.state.sampleMethod.completed} />&nbsp;Completed</label>                                
      </div>    

            <table className="table-bordered fixed" width="100%" >              
              <colgroup>
                {
                  col.map( (c,i) => { return <col key={i} span={c.span} style={{width: c.width}}></col>} )                
                }               
              </colgroup>
              <tbody>
              {                                  
                           
                  table.map( (tr, trIndex) =>                                                          
                      <tr key={trIndex} style={tr.style}>
                      
                      {
                        tr.td.map( (td, tdIndex) =>
                          {
                           return !td.isVal ? <td key={tdIndex}  colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.label}</td> :
                           <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                           <div className="avoid">
                           {
                            td.type === 'calc' ? 
                              <div className="input-group">
                                <input  id={td.scopeVariable} onChange={this.onChange.bind(this)}  step={td.step} type='number' value={td.value} readOnly className='form-control' style={td.style}/>
                                <span className="input-group-addon">                                                                    
                                  <td style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} />
                                </span>
                              </div>
                              :                                                                                      
                                td.unit === 'string' ?
                                  <input id={td.scopeVariable} onChange={this.onChangeString.bind(this)} value={td.value_string} type='text' className='form-control' style={td.style}/>
                                  : <div className="input-group"><input id={td.scopeVariable} onChange={this.onChange.bind(this)} min={td.min} max={td.max} step={td.step} value={td.value} type='number' className='form-control' style={td.style}/><span className="input-group-addon"><td style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} /></span></div>                                  
                           }                        
                           </div>
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

            <Confirm onConfirm={this.CalculateAndSave.bind(this)} body="Are you sure you want to Save Data?" confirmBSStyle='primary' confirmText="Confirm Save" title="Save Method Data">  
              <button className="hidden-print btn-block btn btn-lg btn-success">Calculate and Save</button>            
            </Confirm>
           </div>   
  }
  
  goBack(){
    this.context.router.goBack();
  }

  saveData(oState){            
    oState.scopeData.map( (row, rI) => {      
      
      if(row.id && row.input_type !== 'constant'){        
        if(row.unit === 'string'){
          sendRow(`sample_has_variables?id=eq.${row.id}`,{value_string: row.value_string},'patch');    
        }else{
          sendRow(`sample_has_variables?id=eq.${row.id}`,{value: row.value},'patch');        
        }                      
      }else if(row.type !== 'constant'){
        if(row.unit === 'string'){
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value_string: row.value_string},'post').then( (res) =>{row.id = res.data.id;});        
        }else{          
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value: row.value},'post').then( (res) =>{row.id = res.data.id;});
        }                
      }      
      return row;    
    })     
    sendRow(`sample_has_methods?id=eq.${this.state.sampleMethod.id}`,{completed: this.state.sampleMethod.completed},'patch');
    this.setState(oState);
  }

  parseInput(oState){
    let scope = {};        
    
    oState.scopeData.map( (d) => {          
        if(d.unit !== 'string'){
          let round = d.step*10000;
          if(round){}else{ round = 100; }
          if(d.input_type === 'in'){
            try{        
                scope[d.symbol] = Math.round(parseFloat(d.value,10)*round)/round;
                if(isNaN(scope[d.symbol])){                
                  scope[d.symbol] = ( d.default_value ? d.default_value : 0);
                }
              }catch(err){
                scope[d.symbol] = ( d.default_value ? d.default_value : 0);
              }      
            }
          }
          else{
            scope[d.symbol] = d.value;
          }
      return d;    
    });    

    oState.scopeData.map ( (d) =>{      
      let round = d.step*10000;
      if(d.unit !== 'string'){      
       
        if(round){}else{ round = 100; }
        
        if(d.input_type === 'calc'){                
          try{        
            scope[d.symbol]=Math.round(math.eval(d.formula,scope)*round)/round;               
          }catch(err){                     
           scope[d.symbol] = ( d.default_value ? d.default_value : 0);
          }        
        }      
        
        if(isFinite(scope[d.symbol])){
        }else{        
          scope[d.symbol] = ( d.default_value ? d.default_value : 0);
        }

        if(isNaN(scope[d.symbol])){        
          scope[d.symbol] = ( d.default_value ? d.default_value : 0);
        }
      }

      return d;
    });    

    oState.scopeData.map( (d,index)=>{      
      oState.scopeData[index].value = scope[d.symbol];
      return d;
    });
    
    this.saveData(oState);
  }
  
  CalculateAndSave(e){    
    let oState = this.state;
    this.parseInput(oState);        
  }
  
  onChangeString(e){
    e.preventDefault();
    let oState = this.state;        
    
    oState.scopeData.map( (d, index_) =>{
      if(e.target.id === d.symbol ){
        oState.scopeData[index_].value_string = e.target.value;               
        console.log(oState.scopeData[index_].symbol,oState.scopeData[index_].value_string);
      }
      return d;
    });
    
    this.setState(oState); 
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
    let round = this.state.scopeData[index].step*10000;
    
    if(round){}else{ round = 100; }
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